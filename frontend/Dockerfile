FROM node:alpine AS BUILDER

WORKDIR /app

COPY . .

ADD package.json package-lock.json ./

RUN npm install

ADD public ./public
ADD src ./src
ADD .browserslistrc .eslintrc.js babel.config.js vue.config.js .env.production ./

RUN npm run build

FROM node:alpine

WORKDIR /app

RUN npm i -g serve

COPY --from=BUILDER /app/dist ./

CMD serve -s -l $PORT
