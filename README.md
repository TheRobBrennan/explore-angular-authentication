# Welcome

This project is intended to serve as a starting point for exploring authentication within the MEAN ([MongoDB](https://www.mongodb.com), [ExpressJS](https://expressjs.com), [AngularJS](https://angular.io), and [NodeJS](https://nodejs.org/en/)) stack.

## Getting started

The easiest way to use this repo is to have [Docker](https://www.docker.com) installed and configured on your development machine.

You can spin up the project by running:

    $ npm start

This will create the following Docker containers:

+ `angular-auth-app` - A simple [ExpressJS](https://expressjs.com) application
+ `angular-auth-server` - A simple [ExpressJS](https://expressjs.com) application
+ `angular-auth-mongodb` - A [MongoDB](https://www.mongodb.com) server

You should be able to view the sample `angular-auth-app` at [http://localhost:3000](http://localhost:3000) as well as the sample `angular-auth-server` at [http://localhost:3001](http://localhost:3001)

Once you have finished with your work - or if you would like to stop the project - you can run:

    $ npm run docker:down

If you would like to restart this demo, there are two key scripts that you will find useful:

+ `docker:refresh` - Stops and restarts the services in `docker-compose.yml`
+ `docker:refresh:clean` - This stops any running containers identified in `docker-compose.yml`, builds new images and containers based off the latest Docker files, and then starts up all of the services identified in `docker-compose.yml`

## Resources

If you would like to see how to setup local authentication using the MEAN stack, I would suggest reading
[Securing MEAN Stack (Angular 5) Web Application using Passport](https://www.djamware.com/post/5a878b3c80aca7059c142979/securing-mean-stack-angular-5-web-application-using-passport)
