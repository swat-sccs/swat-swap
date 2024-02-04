FROM node:lts-bookworm
ENV NODE_ENV=development
WORKDIR /usr/src/app
# Leave ports for compose
# EXPOSE 3000
COPY package*.json ./
RUN chown -R node:node /usr/src/app
USER node
