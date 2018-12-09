# note-api-by-typescript

note-api-by-typescript is a sample web api project implemented by [TypeScript](https://www.typescriptlang.org/).

Please use this as a template to start your app with TypeScript, Express and Sequelize :)


## Requirements

1. Install Node.js and Yarn  
https://nodejs.org/en/download/  
https://yarnpkg.com/lang/en/docs/install/

2. Run database  
You can refer [here](https://github.com/shiba-hiro/note-mysql).


## Quick start

Can start by simply installing libs and executing it.
```
$ git clone https://github.com/shiba-hiro/note-api-by-typescript
$ cd note-api-by-typescript
$ yarn install
$ yarn start
```

You can check state by health-check endpoint.  
This example use [httpie](https://httpie.org/), of course curl is also OK.
```
$ http GET http://localhost:3000/health-check
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 127
Content-Type: application/json; charset=utf-8
Date: Sun, 09 Dec 2018 16:55:20 GMT
ETag: W/"7f-/JxjIsxdzB3KXVSU4+wuCjF4tmE"
X-Powered-By: Express

{
    "app": {
        "message": "Application is running.", 
        "success": true
    }, 
    "dbConnection": {
        "message": "Database is available.", 
        "success": true
    }
}

```


## Test

Execute spec programs while starting the server  
```
$ yarn test
```


## Libraries
The most popular(I think) web framework for Node, Express.
[Express](http://expressjs.com/)

Sequelize, the powerful ORM, and of course with [sequelize-typescript](https://www.npmjs.com/package/sequelize-typescript) to use TypeScript.
[Sequelize](https://sequelize.readthedocs.io/en/v3/)


## TODOs

- Add test cases

- Add Response Type using momentjs

- Connect with newman
