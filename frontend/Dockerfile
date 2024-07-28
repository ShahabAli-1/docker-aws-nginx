FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the React app
RUN npm run build


FROM nginx:1.18.0-alpine

# Copy the build output to the server's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to serve the frontend
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]