# React/Redux Express Starter Pack

#Build using Brad Traversy react express starter pack but with a vagrant build so it can be isolated on
a linux environment


#First run the command vagrant up (not gonna lie not sure if the initial syncing of file is working)

#If initial sync of files did not work push all files to the vagrant

#SFTP is 127.0.0.1 and port 2222

#the private key in .vagrant/machines/default/virtualbox/private_key

#vagrant ssh to get in

vagrant up

#You are going to have to start up mongodb wit the command

sudo service mangod start

#To stop mongod run

sudo service mangod stop

#ill probably make it automatically start at some point


> Create full stack apps with React/Redux and Express. Run your client and server with a single command

## Quick Start

``` bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```
