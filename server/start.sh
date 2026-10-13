#!/bin/sh
set -eu

LISTEN_PORT="${PORT:-80}"
API_PORT="${API_PORT:-3001}"

mkdir -p /run/nginx /var/lib/nginx/tmp /var/log/nginx

# Alpine nginx lädt http.d, nicht conf.d
sed -e "s/__LISTEN_PORT__/${LISTEN_PORT}/g" \
    -e "s/__API_PORT__/${API_PORT}/g" \
    /app/nginx/nginx.conf.template \
  > /etc/nginx/http.d/default.conf
rm -f /etc/nginx/conf.d/default.conf 2>/dev/null || true

echo "[start] listening on :${LISTEN_PORT}, API on :${API_PORT}"
echo "[start] SMTP_PASSWORD is ${SMTP_PASSWORD:+set}${SMTP_PASSWORD:-MISSING}"

API_PORT="${API_PORT}" node /app/server/register-api.mjs &
API_PID=$!

sleep 0.5
if ! kill -0 "$API_PID" 2>/dev/null; then
  echo "[start] register-api failed to start" >&2
fi

nginx -t
exec nginx -g "daemon off;"
