# USER-AUTH-API

## Overview

This is a Node.js project that provides a RESTful API for user authentication and password management. The API allows users to log in, reset their passwords, and manage their accounts.

## Features

- User login with email and password
- Password reset request
- Password token validation
- User account management (create, find, update, delete)

## Technologies Used

- Node.js
- Express.js
- MongoDB (for user data storage)
- bcrypt (for password hashing)
- jsonwebtoken (for authentication tokens)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SeifeddineBS/user-auth-api.git
   ```

2. Navigate into the project directory:

   ```bash
   cd your-repo
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your secret key for JWT:

# MongoDB connection string
    DB_CONNECT=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@clusterfitbit.gefbua6.mongodb.net/?retryWrites=true&w=majority

    # Secret key for JWT
    TOKEN_SECRET=your_jwt_secret

    # Default email and password for a service or user
    DEFAULT_EMAIL=your_email@example.com
    DEFAULT_PASSWORD=your_default_password

## API Endpoints

### Password Management

#### Reset Password Request

- **Endpoint**: `PUT /resetPasswordRequest/:email`
- **Description**: Sends a password reset request to the provided email address.
- **URL Parameters**:
  - `email`: The email address of the user requesting the password reset.

#### Reset Password Token Validation

- **Endpoint**: `PUT /resetPasswordCheckToken/:token`
- **Description**: Validates the token sent to the user for password reset.
- **URL Parameters**:
  - `token`: The password reset token sent to the user.

### User Management

#### Create User

- **Endpoint**: `POST /add`
- **Description**: Creates a new user.
- **Request Body**: 
  ```json
  {
    "username": "newUser",
    "password": "newPass"
  }
  ```

#### Find User

- **Endpoint**: `GET /find`
- **Description**: Retrieves user details.

#### Update User

- **Endpoint**: `PUT /update/:id`
- **Description**: Updates user information.
- **URL Parameters**:
  - `id`: The ID of the user to be updated.

#### Delete User

- **Endpoint**: `DELETE /delete/:id`
- **Description**: Deletes a user from the database.
- **URL Parameters**:
  - `id`: The ID of the user to be deleted.

## Usage

- Make sure the server is running before making requests to the API.
- Use a tool like Postman or cURL to test the API endpoints.