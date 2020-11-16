FROM node
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 7000
ENTRYPOINT ["npm","run","start"]
