# Use the official Node.js image as the base image
FROM node:18.18-alpine

# Set the working directory inside the image
WORKDIR /app

# Copy package.json and package-lock.json into the image
COPY package*.json ./
COPY tsconfig.json ./
COPY nodemon.json ./
# DO NOT COPY .env OR local.settings.json INTO THE IMAGE

# Install dependencies
RUN npm ci

# Copy the remaining application files into the image
COPY src ./src/

# Expose the port your application will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]