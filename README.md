# Global Phone Directory

RESTful webservice to maintain a global phone directory. Webserives updates and returns JSON allowing access through any remote system.

## Installation and Setup

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

#### [Node v8.15.0](https://www.npmjs.com/get-npm)

Check if you have node or npm installed:

```
node -v
npm -v
```
#### [MySQL community Server](https://dev.mysql.com/downloads/mysql/)

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

#### Run npm(node) server

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

### Database setup
Import the sql dump from "Global_Phone_Directory/db_scripts/global_directory.sql"
```
mysql -u root -p my_directory < global_directory.sql
```

## REST Commands

The application currently provides following endpoints:

* GET / ``` localhost:3003/ ```

Root request. Simply prints: "Hello from ROOT".

* GET /users ``` localhost:3003/users ```

Gets a list of all users.

* GET /user/:id ``` localhost:3003/user/3 ```

Get details of the contact will key="id". Here, id refers to the id column in database.

* POST /user_create ``` localhost:3003/user_create ```

Add a new person to contact.

## Screenshots

<img src="/screenshots/Screen Shot 2019-02-07 at 10.05.06 PM.png" height = "400" width = "550" alt="Get request">
<img src="/screenshots/Screen Shot 2019-02-07 at 10.04.07 PM.png" height = "400" width = "550" alt="Show all contacts">
<img src="/screenshots/Screen Shot 2019-02-07 at 10.04.24 PM.png" height = "400" width = "550" alt="Add new contact">

## Authors

* **Mahesh Manohar Belnekar** - [linkedin](https://www.linkedin.com/in/maheshbelnekar/)

## Acknowledgments and Credits

* [Lets Build That App](https://www.youtube.com/channel/UCuP2vJ6kRutQBfRmdcI92mA)

