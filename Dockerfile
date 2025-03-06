FROM node:18-slim

# Set up working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./

RUN npm install --production

# Copy application files
COPY . ./

# Set production environment
ENV NODE_ENV=production

EXPOSE 8080

CMD [ "npm", "start" ] 