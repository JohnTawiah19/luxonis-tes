# Use Node.js as the base image
FROM node:16

ENV DATABASE_URL="postgres://postgres:admin@db:5432/crawler"

# Set the working directory inside the container
WORKDIR /server


# Copy the package.json and package-lock.json files to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the server code into the container
COPY . .

# Expose the necessary port for your server
EXPOSE 3001

# Start the server when the container runs
CMD ["yarn", "start"]
