
# Task Management API

This is a simple Task Management API built with Node.js, Express, and MongoDB using Mongoose. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks.

## Features

- **Create a Task**
- **Read All Tasks**
- **Read a Task by ID**
- **Update a Task**
- **Delete a Task**

## Prerequisites

- Node.js installed
- MongoDB installed and running

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the MongoDB server:
    ```bash
    mongod
    ```

4. Run the server:
    ```bash
    node server.js
    ```

## API Endpoints

### Create a Task
**POST** `/tasks`

- **Request Body** (JSON):
  ```json
  {
    "title": "Task Title",
    "description": "Task Description",
    "status": "In Progress"
  }
  ```

### Read All Tasks
**GET** `/tasks`

- **Response**:
  Returns a list of all tasks.

### Read a Task by ID
**GET** `/tasks/:id`

- **Response**:
  Returns the task with the specified ID.

### Update a Task
**PUT** `/tasks/:id`

- **Request Body** (JSON):
  ```json
  {
    "title": "Updated Title",
    "description": "Updated Description",
    "status": "Completed"
  }
  ```

### Delete a Task
**DELETE** `/tasks/:id`

- **Response**:
  Returns a confirmation message upon successful deletion.

## Making a POST Request

### Using Postman
1. Open Postman.
2. Select **POST** from the request type dropdown.
3. Enter the URL: `http://localhost:3000/tasks`.
4. Go to the **Body** tab, select **raw**, and choose **JSON** format.
5. Add your JSON payload:
    ```json
    {
      "title": "Learn Node.js",
      "description": "Understand how to make a POST request",
      "status": "In Progress"
    }
    ```
6. Click **Send**.

### Using cURL
```bash
curl -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-d '{
  "title": "Learn Node.js",
  "description": "Understand how to make a POST request",
  "status": "In Progress"
}'
```

### Using JavaScript `fetch` API
```javascript
fetch('http://localhost:3000/tasks', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: "Learn Node.js",
    description: "Understand how to make a POST request",
    status: "In Progress"
  })
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch((error) => console.error('Error:', error));
```

### Using Axios
```javascript
const axios = require('axios');

axios.post('http://localhost:3000/tasks', {
  title: "Learn Node.js",
  description: "Understand how to make a POST request",
  status: "In Progress"
})
.then(response => {
  console.log('Task created:', response.data);
})
.catch(error => {
  console.error('Error creating task:', error);
});
```

### Using an HTML Form
```html
<form action="http://localhost:3000/tasks" method="POST">
  <label for="title">Title:</label>
  <input type="text" id="title" name="title" required>
  
  <label for="description">Description:</label>
  <textarea id="description" name="description"></textarea>
  
  <label for="status">Status:</label>
  <select id="status" name="status">
    <option value="Pending">Pending</option>
    <option value="In Progress">In Progress</option>
    <option value="Completed">Completed</option>
  </select>
  
  <button type="submit">Create Task</button>
</form>
```
