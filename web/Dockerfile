FROM node:16

WORKDIR /web

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn run build

# Expose port 3000 for the Next.js server
EXPOSE 8080

# Start the Next.js server when the container runs
CMD ["yarn", "start"]
