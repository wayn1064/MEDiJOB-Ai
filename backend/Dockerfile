FROM node:20-slim
WORKDIR /app

# Install dependencies including typescript
COPY package*.json ./
RUN npm install

# Copy application codes
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build (Optional, ts-node is used for execution based on package.json)
# RUN npm run build

# Cloud Run binds to $PORT (usually 8080 or 5001)
EXPOSE 5001

CMD ["npm", "start"]
