FROM node:alpine

RUN npm install -g nodemon

WORKDIR /app

COPY . /app

ADD package.json package-lock.json ./

RUN npm install

ADD bin ./bin

CMD [ "nodemon" ]


