export interface RegistrationData {
  name: string;
  telefon: string;
  email: string;
  /** Honeypot – muss leer bleiben */
  website?: string;
}

/**
 * Versendet die Webinar-Anmeldung an `/api/register` (Nodemailer hinter Nginx).
 */
export async function submitRegistration(endpoint: string, data: RegistrationData): Promise<void> {
  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 700));
    return;
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 25_000);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Anmeldung fehlgeschlagen (HTTP ${response.status})`);
    }

    const payload = (await response.json().catch(() => null)) as { ok?: boolean } | null;
    if (payload && payload.ok === false) {
      throw new Error('Anmeldung fehlgeschlagen');
    }
  } finally {
    window.clearTimeout(timeout);
  }
}
