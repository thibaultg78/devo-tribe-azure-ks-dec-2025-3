FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --production
COPY server.js ./
COPY index.html ./
COPY style.css ./
EXPOSE 3000
CMD ["npm", "start"]
