#!/bin/sh

# Check MongoDB connection
node checkMongoConnection.js

if [ $? -eq 0 ]; then
  echo "MongoDB connection successful. Starting the application."
  yarn start
else
  echo "MongoDB connection failed. Exiting."
  exit 1
fi
