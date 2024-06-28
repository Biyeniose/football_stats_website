# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the app
CMD ["nodemon", "src/index.ts"]
