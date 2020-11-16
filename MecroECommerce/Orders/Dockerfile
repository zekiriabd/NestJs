FROM node
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 7003
ENTRYPOINT ["npm","run","start"]
