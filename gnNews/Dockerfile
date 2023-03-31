FROM node:16-alpine as builder
WORKDIR /usr/src/app
COPY . .
COPY package*.json ./
ARG REACT_APP_NEWS_API_KEY
RUN echo "window.REACT_APP_NEWS_API_KEY = '$REACT_APP_NEWS_API_KEY'" >> /usr/src/app/public/env_vars.js
RUN npm install
ENV NODE_ENV "production"

RUN npm run build

FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]