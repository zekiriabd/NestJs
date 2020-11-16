FROM node
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 7001
ENTRYPOINT ["npm","run","start"]