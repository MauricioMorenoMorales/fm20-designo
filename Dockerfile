FROM node:15.5.0

WORKDIR /designo

RUN yarn install

COPY . .

CMD ["yarn", "serve"]