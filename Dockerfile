FROM node:18-slim

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . ./

ENV NODE_ENV=production

EXPOSE 8080

CMD [ "npm", "start" ] 