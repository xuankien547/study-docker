FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install 
EXPOSE 8080
CMD ["node", "app.js"]