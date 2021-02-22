FROM node:13-alpine

WORKDIR /app
COPY ./package.json ./
COPY ./dist ./
RUN npm i
EXPOSE 5000

ENTRYPOINT ["npm"]
CMD ["start"]
