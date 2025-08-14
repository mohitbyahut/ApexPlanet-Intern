# Snack Shop Backend API

This is the backend API for the Snack Shop application, providing authentication endpoints for user registration, login, and account management.

## Setup

1. Make sure you have Node.js and MongoDB installed on your system
2. Create a `.env` file in the root of the backend directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/snackshop
   JWT_SECRET=your-super-secret-key-change-in-production
   JWT_EXPIRE=30d
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the development server:
   ```
   npm run dev
   ```

## API Endpoints

### Authentication

- **Register User**: `POST /api/auth/register`
  - Request body: `{ "name": "User Name", "email": "user@example.com", "password": "password123" }`
  - Response: User object with JWT token

- **Login User**: `POST /api/auth/login`
  - Request body: `{ "email": "user@example.com", "password": "password123" }`
  - Response: User object with JWT token

- **Logout User**: `GET /api/auth/logout`
  - Response: Success message

- **Get Current User**: `GET /api/auth/me`
  - Headers: `Authorization: Bearer YOUR_TOKEN`
  - Response: User object

## Authorization

For protected routes, include the JWT token in the request header:
```
Authorization: Bearer YOUR_TOKEN
```

## Error Handling

API errors return JSON responses with a `success` boolean and a `message` string. 