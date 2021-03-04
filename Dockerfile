FROM node:alpine

WORKDIR /seaOfChoices

COPY . /seaOfChoices

RUN npm install -g nodemon

ADD package.json package-lock.json ./

RUN npm install

ADD src ./src
ADD bin ./bin

CMD [ "nodemon" ]


