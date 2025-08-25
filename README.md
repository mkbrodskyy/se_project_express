# WTWR (What to Wear?): Back End

## Project Description
WTWR (What to Wear?) is a back-end server for a clothing recommendation application. The server provides a RESTful API for managing users and clothing items, allowing users to add, view, like, and delete clothing items based on weather conditions. The project demonstrates core back-end development skills, including working with databases, implementing validation, and handling errors.

## Functionality
- User management: create users, view all users, and get user details by ID.
- Clothing item management: add new items, view all items, like/dislike items, and delete items.
- Weather-based clothing categorization: items are tagged for "hot", "warm", or "cold" weather.
- Input validation and error handling for all endpoints.

## Technologies and Techniques Used
- **Node.js** and **Express.js** for building the server and API endpoints.
- **MongoDB** with **Mongoose** ODM for data modeling and database operations.
- **Validator** library for validating user input (e.g., URLs).
- **RESTful API** design principles.
- **Error handling** with custom status codes and messages.
- **ESLint** and **Prettier** for code quality and formatting.
- **Nodemon** for development with hot reload.
- **GitHub Actions** for CI/CD and automated testing.

## Running the Project
`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

### Testing
Before committing your code, make sure you edit the file `sprint.txt` in the root folder. The file `sprint.txt` should contain the number of the sprint you're currently working on. For ex. 12

## Deployment

- **Backend domain:** https://api.frontend.twilightparadox.com

## Frontend Repository

- [Frontend GitHub Repository](https://github.com/mkbrodskyy/se_project_react)