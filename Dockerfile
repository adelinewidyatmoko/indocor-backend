FROM node:18.8-alpine as base

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./
COPY . .

RUN yarn install
RUN yarn build

FROM base as runtime

ENV NODE_ENV=deployment
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /home/node/app
COPY package*.json ./
COPY yarn.lock ./

RUN yarn install --production
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

# Add the startup script and make it executable
COPY start.sh .
RUN chmod +x start.sh

# Add the MongoDB connection check script
COPY checkMongoConnection.js .

EXPOSE 3000

# Use the startup script to start the application
CMD ["./start.sh"]
