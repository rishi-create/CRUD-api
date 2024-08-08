CRUD API with Node.js, Express.js, and MongoDB
Overview:
This project is a CRUD (Create, Read, Update, Delete) API built with Node.js, Express.js, and MongoDB. 
It demonstrates backend development and database interactions, showcasing how to design and implement a scalable and maintainable backend system.

Prerequisites:
Node.js (v12 or later)
MongoDB (v4 or later)
npm (Node package manager)

Create:
POST /api/products
Description: Create a new item
Request Body: JSON object containing item details
Response: JSON object of the created item

Read:
GET /api/products
Description: Get all items
Response: JSON array of items

GET /api/products/
Description: Get a single item by ID
Response: JSON object of the requested item

Update:
PUT /api/products/
Description: Update an item by ID
Request Body: JSON object containing updated item details
Response: JSON object of the updated item

Delete:
DELETE /api/products/
Description: Delete an item by ID
Response: JSON object of the deleted item
