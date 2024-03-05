FROM node:lts-bookworm
ENV NODE_ENV=development
WORKDIR /usr/src/app
# Leave ports for compose
# EXPOSE 3000
RUN chown -R node:node /usr/src/app
RUN apt update 2> /dev/null
RUN apt install -y netcat-openbsd 2> /dev/null

USER node
