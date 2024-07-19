# Use an official Node.js runtime as a parent image
FROM node:18.20.3

LABEL maintainer="winnie.gitau282@gmail.com"

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Use a lightweight web server to serve the React app
FROM nginx:alpine

# Copy the build artifacts from the previous stage
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
