import http from 'node:http';
import nodemailer from 'nodemailer';

const PORT = Number(process.env.API_PORT || 3001);
const SMTP_HOST = process.env.SMTP_HOST || 'mail.agenturserver.de';
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER || 'noreply@baylan-med.de';
const SMTP_PASS = process.env.SMTP_PASSWORD;
const MAIL_TO = process.env.INQUIRY_TO || 'office@baylan-med.com';
const MAIL_FROM = process.env.SMTP_FROM || 'noreply@baylan-med.de';
/** true = SSL (465), false = STARTTLS (25/587) */
const SMTP_SECURE =
  process.env.SMTP_SECURE != null
    ? process.env.SMTP_SECURE === 'true' || process.env.SMTP_SECURE === '1'
    : SMTP_PORT === 465;

const SITE_NAME = process.env.SITE_NAME || 'INFINITEFORCE';

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > 32_768) {
        reject(new Error('Payload too large'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function validate(data, isQuestion) {
  const errors = [];
  if (!data.name?.trim() || data.name.trim().length < 2) errors.push('name');
  if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
    errors.push('email');
  }
  const phone = String(data.telefon ?? data.phone ?? '').trim();
  const digits = phone.replace(/\D/g, '');
  if (!phone || digits.length < 6) errors.push('telefon');
  if (isQuestion) {
    const message = String(data.message ?? '').trim();
    if (!message || message.length < 5) errors.push('message');
  }
  return errors;
}

function json(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(body));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildOfficeEmail({ name, email, telefon, message, isQuestion }) {
  const rows = [
    ['Name', name],
    ['E-Mail', email],
    ['Telefon', telefon],
  ];
  if (isQuestion && message) rows.push(['Frage', message]);

  const rowHtml = rows
    .map(
      ([label, value], i) => `
      <tr>
        <td style="padding:12px 16px;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:#A87921;width:38%;border-top:${i === 0 ? '0' : '1px solid #EDE4D4'};vertical-align:top">${escapeHtml(label)}</td>
        <td style="padding:12px 16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#251D0D;border-top:${i === 0 ? '0' : '1px solid #EDE4D4'};vertical-align:top;white-space:pre-wrap">${escapeHtml(value)}</td>
      </tr>`,
    )
    .join('');

  const title = isQuestion ? 'Neue Website-Frage' : 'Neue Anfrage';
  const textLines = [
    `${title} – ${SITE_NAME}`,
    '',
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Telefon: ${telefon}`,
  ];
  if (isQuestion && message) textLines.push(`Frage: ${message}`);

  const html = `<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F3EDE2">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F3EDE2;padding:28px 12px">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#FFFFFF;border-radius:16px;overflow:hidden;border:1px solid #E6D7BC">
          <tr>
            <td style="background:#191307;padding:28px 24px;text-align:center">
              <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#E0B76B">${escapeHtml(SITE_NAME)}</p>
              <h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:22px;line-height:1.3;color:#FFFFFF">${escapeHtml(title)}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 16px 24px">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAF6EF;border-radius:12px;margin:12px 0">
                ${rowHtml}
              </table>
              <p style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:#7A7266">Antworten Sie direkt auf diese E-Mail – Reply-To ist auf die Absenderadresse gesetzt.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { text: textLines.join('\n'), html };
}

function buildParticipantEmail({ name, isQuestion }) {
  const firstName = name.split(/\s+/)[0] || name;
  const body = isQuestion
    ? 'vielen Dank für deine Nachricht. Wir melden uns in Kürze bei dir.'
    : 'vielen Dank für deine Anfrage. Wir melden uns in Kürze bei dir.';

  const text = [
    `Hallo ${firstName},`,
    '',
    body,
    '',
    'Herzliche Grüße',
    SITE_NAME,
  ].join('\n');

  const html = `<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F3EDE2">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F3EDE2;padding:28px 12px">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#FFFFFF;border-radius:16px;overflow:hidden;border:1px solid #E6D7BC">
          <tr>
            <td style="background:#191307;padding:28px 24px;text-align:center">
              <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#E0B76B">${escapeHtml(SITE_NAME)}</p>
              <h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:22px;line-height:1.3;color:#FFFFFF">Danke für deine Nachricht</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 24px">
              <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#251D0D">Hallo ${escapeHtml(firstName)},</p>
              <p style="margin:0 0 18px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#251D0D">${escapeHtml(body)}</p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#251D0D">Herzliche Grüße<br>${escapeHtml(SITE_NAME)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { text, html };
}

function createTransporter() {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    requireTLS: !SMTP_SECURE,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    connectionTimeout: 12_000,
    greetingTimeout: 12_000,
    socketTimeout: 20_000,
    tls: { minVersion: 'TLSv1.2' },
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/api/health') {
    json(res, 200, {
      ok: true,
      smtpConfigured: Boolean(SMTP_PASS),
      smtpHost: SMTP_HOST,
      smtpPort: SMTP_PORT,
      inquiryTo: MAIL_TO,
    });
    return;
  }

  if (req.method === 'OPTIONS' && req.url === '/api/register') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method !== 'POST' || req.url !== '/api/register') {
    json(res, 404, { ok: false, error: 'Not found' });
    return;
  }

  if (!SMTP_PASS) {
    console.error('[register-api] SMTP_PASSWORD is not set');
    json(res, 503, { ok: false, error: 'Mail not configured' });
    return;
  }

  try {
    const raw = await readBody(req);
    const data = JSON.parse(raw);

    // Honeypot: Bots füllen „website“ – still 200, keine Mail
    if (data.website?.trim()) {
      json(res, 200, { ok: true });
      return;
    }

    const isQuestion = data.type === 'question';
    const errors = validate(data, isQuestion);
    if (errors.length) {
      json(res, 400, { ok: false, error: 'Validation failed', fields: errors });
      return;
    }

    const name = data.name.trim();
    const email = data.email.trim();
    const telefon = String(data.telefon ?? data.phone ?? '').trim();
    const message = String(data.message ?? '').trim();
    const office = buildOfficeEmail({ name, email, telefon, message, isQuestion });
    const participant = buildParticipantEmail({ name, isQuestion });

    console.log(`[register-api] sending via ${SMTP_HOST}:${SMTP_PORT} (secure=${SMTP_SECURE}) → ${MAIL_TO}`);
    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"${SITE_NAME}" <${MAIL_FROM}>`,
      to: MAIL_TO,
      replyTo: email,
      subject: isQuestion ? `[Website-Frage] ${name}` : `[Anfrage] ${name}`,
      text: office.text,
      html: office.html,
    });

    await transporter.sendMail({
      from: `"${SITE_NAME}" <${MAIL_FROM}>`,
      to: email,
      subject: isQuestion ? `Deine Frage an ${SITE_NAME}` : `Deine Anfrage an ${SITE_NAME}`,
      text: participant.text,
      html: participant.html,
    });

    console.log('[register-api] sent ok');
    json(res, 200, { ok: true });
  } catch (err) {
    console.error('[register-api] send failed:', err?.message || err);
    json(res, 500, { ok: false, error: 'Send failed' });
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(
    `Register API on 127.0.0.1:${PORT} | SMTP ${SMTP_HOST}:${SMTP_PORT} secure=${SMTP_SECURE} | to=${MAIL_TO} | pass=${SMTP_PASS ? 'set' : 'MISSING'}`,
  );
});
