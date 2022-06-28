FROM node:alpine
WORKDIR /usr/src
COPY /package*.json ./
COPY /build ./build
COPY fbc.json /home/rrremote/firebase-account-file.json
RUN npm install --production
CMD ["npm", "start"]