FROM node:26-alpine

WORKDIR /app

RUN npm i -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pn ci

COPY . .

RUN pn build

CMD ["pn", "start"]