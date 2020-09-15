FROM node:12.18.3

EXPOSE 3000

ENV PORT 3000

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
