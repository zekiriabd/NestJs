FROM node
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 7002
ENTRYPOINT ["npm","run","start"]
