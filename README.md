# Global_Phone_Directory

ReSTful webservice to maintain a global phone directory. Webserives updates and returns JSON allowing access through any remote system.

## Installation and Setup

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Node v8.15.0](https://www.npmjs.com/get-npm)

Check if you have node or npm installed:

```
node -v
npm -v
```
* [MySQL community Server](https://dev.mysql.com/downloads/mysql/)

Check if you have mysql installed:
```
mysqladmin --version
```

### Setup

* Clone git repository: https://github.com/maheshbelnekar/Global_Phone_Directory

```
git clone git@github.com:maheshbelnekar/Global_Phone_Directory.git
cd Global_Phone_Directory
```

* Run npm(node) server

```
sudo npm install
sudo npm i -g nodemon
nodemon app.js
```
Now, the server should be up and running on localhost:3003.

## Configuration

### Node server port

By default, the node server runs on port 3003. You can change this my editing the app.listen() in app.js.
```
app.listen(3003,() => {
    console.log("Server is up and running on port 3003...")
})
```

### Database server and password
You can either choose to connect to a remote database or run on a local one. Configuring the username and password(if present), is a must. Update getConnection() function in app.js.
```
// function to establish connection with the database
function getConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'my_directory'
  });
}
```

## Authors

* **Mahesh Manohar Belnekar** - [linkedin](https://www.linkedin.com/in/maheshbelnekar/)

