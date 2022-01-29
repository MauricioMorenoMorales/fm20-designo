FROM node:15.5.0

WORKDIR /designo
COPY package.json .
RUN yarn install
COPY . .

CMD ["yarn", "serve"]
