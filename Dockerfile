# Dokploy: Build Type → Dockerfile, Dockerfile Path → Dockerfile, Context → .
# Publish Directory leer lassen. Domain-Port → 80
# Runtime-Env: SMTP_*, INQUIRY_TO, API_PORT (bereits in Dokploy hinterlegt)

FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine AS runtime
WORKDIR /app

RUN apk add --no-cache nginx \
  && mkdir -p /run/nginx /var/lib/nginx/tmp /var/log/nginx \
  && rm -f /etc/nginx/http.d/default.conf /etc/nginx/conf.d/default.conf

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --from=build /app/dist ./dist
COPY server ./server
COPY nginx/nginx.conf.template ./nginx/nginx.conf.template

RUN chmod +x /app/server/start.sh

# Dokploy setzt oft PORT=3000 – Startskript nutzt PORT, Fallback 80
ENV PORT=80
ENV API_PORT=3001
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=8s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz || exit 1

CMD ["sh", "/app/server/start.sh"]
