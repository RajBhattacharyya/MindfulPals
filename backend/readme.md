# Auth API 🌐✨

Welcome to the Auth API, a part of the Virtual Pet Therapy for Kids project! This API provides user authentication and interaction with a generative chat model for a supportive and empathetic virtual assistant.

## Setup 🚀

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/RajBhattacharyya/MindfulPals.git
   ```

2. **Install Dependencies:**

   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   JWT_SECRET=your-jwt-secret
   GEMINI_API=your-gemini-api-key
   PORT=5000
   ```

4. **Run the Application:**

   ```bash
   npm start
   ```

   The server will be accessible at `http://localhost:5000`.

## Endpoints 🛣️

### 1. Create User: `POST /api/auth/createuser`

Creates a new user with a name, email, and password.

- **Request:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```

- **Response:**
  ```json
  {
    "success": true,
    "authtoken": "jwt-auth-token"
  }
  ```

### 2. User Login: `POST /api/auth/login`

Authenticates a user with email and password.

- **Request:**
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```

- **Response:**
  ```json
  {
    "success": true,
    "authtoken": "jwt-auth-token"
  }
  ```

### 3. Get User Details: `POST /api/auth/getuser`

Retrieves user details after authentication.

- **Request:**
  *(Requires authentication)*

- **Response:**
  ```json
  {
    "_id": "user-id",
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```

### 4. Logout User: `POST /api/auth/logout`

Logs out the user by clearing the authentication token cookie.

- **Request:**
  *(Requires authentication)*

- **Response:**
  ```json
  {
    "success": true,
    "message": "Logout successful"
  }
  ```

### 5. Chat with Virtual Assistant: `POST /api/messages`

Generates responses using a generative chat model.

- **Request:**
  ```json
  {
    "text": "User input text"
  }
  ```

- **Response:**
  ```json
  {
    "sent": false,
    "text": "Generated response from the virtual assistant"
  }
  ```
