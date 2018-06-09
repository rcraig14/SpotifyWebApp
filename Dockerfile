FROM node:carbon

# Make a directory in container and move to it
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install node modules
RUN npm install

# Copy remaining files
COPY . .

EXPOSE 8080
CMD ["npm", "start"]
