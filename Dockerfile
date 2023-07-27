FROM node:18.15.0-alpine as builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY package.json package-lock.json ./
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm i

COPY . .
# Build the app
RUN npm run build

CMD ["npm", "run","start"]