FROM node:14-alpine

WORKDIR /app

COPY package.json ./
COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/
COPY yarn.lock ./


COPY . .

EXPOSE 3001

CMD ["npm", "start"]