# Todo list API Documentation
This documentation provides an overview of the Todo API, which is built using Node.js and utilizes MySQL as the database. The API supports CRUD operations (Create, Read, Update, Delete) for managing todo items.

## Table of Contents
- Getting Started
- Prerequisites
- Installation
- API Endpoints
- Create a Todo
- Retrieve All Todos
- Retrieve a Todo
- Update a Todo
- Delete a Todo
- Conclusion

## Getting Started
## Prerequisites
To use the Todo API, you need to have the following software installed:

- Node.js
- MySQL server

## Installation
1. Clone the repository to your local machine:
```
git clone git@github.com:J0hnZMT/Todo.git
```
2. Navigate to the project directory:

```
cd Todo
```
3. Install the dependencies:

```
npm install
```
4. Set up the MySQL database:

```
npm run db-build
npm run table-build
```
5. Start the application:

```
npm start
```
6. The Todo API should now be running locally on http://localhost:3001/todos.

## API Endpoints
The Todo API provides the following endpoints:

### Create a Todo
URL: /create

Method: POST

Request Body:

```
{
  "task": "Buy groceries",
  "status": 0
}
```
Response:

Success (Status 200):

```
{
  "status": 200,
  "message": "Successfully Created!",
}
```
Error (Status 500):

```
{
  "status": 500,
  "message": "Not Created!",
}
```
### Retrieve All Todos
URL: /tasks

Method: GET

Response:

Success (Status 200):

```
[
  {
    "id": 1,
    "task": "Buy groceries",
    "status": 0,
  },
  {
    "id": 2,
    "task": "Clean the house",
    "status": 1,
  }
]
```
Error (Status 500):

```
{
  "status": 500,
  "message": "Not Retrieved!",
}
```
###Retrieve a Todo
URL: /task/:id

Method: GET

Parameters:

id: The ID of the todo item to retrieve.
Response:

Success (Status 200):

```
{
  "id": 1,
  "task": "Buy groceries",
  "status": 0,
}
```
Error (Status 500):

json
```
{
  "status": 500,
  "message": "Not Retrieved!",
}
```
### Update a Todo
URL: /update

Method: POST

Request Body:

```
{
  "id": 1,
  "task": "Buy snacks",
  "status": 1,
}
```

Response:

Success (Status 200):

```
{
  "status": 200,
  "message": "Successfully Updated!",
}
```
Error (Status 500):

```
{
  "status": 500,
  "message": "Not Updated!",
}
```
###Delete a Todo
URL: /delete/:id

Method: DELETE

Parameters:

id: The ID of the todo item to delete.
Response:

Success (Status 200):
```
{
  "status": 200,
  "message": "Successfully Deleted!",
}
```

```
{
  "status": 500,
  "message": "Not Deleted!",
}
```
## Conclusion
The Todo API provides a simple interface for managing todo items. You can perform CRUD operations to create, retrieve, update, and delete todos. By following this documentation, you should be able to integrate the API into your application and start managing your todo list efficiently.
