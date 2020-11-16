FROM node

WORKDIR /mydir/mynestapp

COPY package.json ./

COPY . .

RUN npm i -g @nestjs/cli

EXPOSE 4000

CMD ["npm" , "run start"]