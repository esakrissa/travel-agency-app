FROM node:18-slim

# Set up working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./

# Build argument for environment
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Install dependencies (including devDependencies in development)
RUN if [ "$NODE_ENV" = "production" ]; then \
        npm install --production; \
    else \
        npm install; \
    fi

# Copy application files
COPY . ./

EXPOSE 8080

CMD [ "npm", "start" ] 