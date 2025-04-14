# FROM node:23

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install 

# COPY . .

# EXPOSE 7777
# CMD ["npm", "run", "start"]

FROM node:alpine
WORKDIR /app
COPY server.js .
EXPOSE 7777
CMD ["node", "server.js"]
