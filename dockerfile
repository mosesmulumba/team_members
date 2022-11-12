FROM node:14

WORKDIR /app

COPY . /app

EXPOSE 3000

RUN npm install -g create-react-app && npm install

CMD ["npm","start"]