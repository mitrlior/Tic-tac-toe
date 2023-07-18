FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# CMD ["/wait", "&&", "npm", "start"]

CMD npm start
