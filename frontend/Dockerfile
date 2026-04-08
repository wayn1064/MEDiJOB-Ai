FROM node:20-slim
WORKDIR /app

# Enable simple server tool
RUN npm install -g serve

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build
COPY . .
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
RUN npm run build

# Cloud Run dynamically assigns port via $PORT env var. 8080 is common.
EXPOSE 80

# Serve static files with 'serve' module binding to Cloud Run $PORT
CMD ["sh", "-c", "serve -s dist -l tcp://0.0.0.0:${PORT:-80}"]
