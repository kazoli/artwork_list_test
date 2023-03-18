# Pull Docker Hub base image
FROM node:16
# Set working directory
WORKDIR /artwork_list_test
# Install app dependencies
COPY package*.json ./
RUN npm install -qy
# Copy app to container
COPY . .
# Run the "dev" script in package.json
CMD ["npm", "start"]