# Stage 1: Build the React application
FROM node:18.20.3-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
# If you're using Yarn, copy yarn.lock and use yarn install below

# Install dependencies
RUN npm install
# Or use yarn install if you're using Yarn

# Copy the rest of your frontend application
COPY . .

# Build your React app
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build output to replace the default Nginx contents.
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the Docker host, so we can access it 
# from the outside.
EXPOSE 80

# The default command runs Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]