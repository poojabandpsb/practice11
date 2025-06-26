FROM node:18
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8200
CMD ["node", "app.js"]