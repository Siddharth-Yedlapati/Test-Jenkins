# Use the base image with Node.js installed
FROM --platform=linux/amd64 node:alpine

# Set the working directory to /frontend
WORKDIR /backend

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the backend code to the container
COPY . .

# Expose the port that the application will run on
EXPOSE 8000

# Start the backend server
CMD ["npm", "start"]