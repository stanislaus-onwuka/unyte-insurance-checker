# Use the official lightweight Node.js image.
# https://hub.docker.com/_/node
FROM node:14-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json .

# Install production dependencies.
RUN npm install

# Copy local code to the container
COPY . .

# Build the app
RUN npm run build

# Install serve to run the application
RUN npm install -g serve

# Command to run the app
CMD ["serve", "-s", "build"]
