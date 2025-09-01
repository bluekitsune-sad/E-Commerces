
# uses node version 22 as our base image
FROM node:22

#Goes to the app directory (Think of it like a cd to app/)
WORKDIR /app

# Copy package.json and package-lock.json (if avalible)
COPY package*.json ./

# install app dependency
RUN npm install

# copy the rest of the app into the conatainer
COPY . .

# set the port environment variables 
ENV port = 9000

#Expose the port to our computer so it can access it
EXPOSE 9000

#Run the app
CMD ["npm","start"]