FROM node:24-alpine

WORKDIR /src

COPY package.json .

ARG NODE_ENV

RUN if [ "$NODE_ENV" = "production" ]; then \
      npm install --omit=dev; \
    else \
      npm install; \
    fi


COPY . .

EXPOSE 5000

CMD [ "npm", "run", "start-dev" ]
