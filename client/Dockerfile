FROM node:13-alpine

WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
EXPOSE 6001
COPY . ./

CMD ["npm", "start"]
