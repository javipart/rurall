FROM node:12.18.3

RUN npm install -g serve

EXPOSE 3000

WORKDIR /app
COPY . .

RUN npm install

CMD ["npm", "start"]