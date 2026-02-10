# Smart Fitness Backend API

Express.js backend server for the Smart Fitness and Meal Planner application. Provides RESTful APIs for user management, authentication, fitness plans, meal planning, and progress tracking.

## 📋 Overview

This backend service handles:
- User registration and authentication
- Plan management (fitness and meal plans)
- User subscriptions
- Progress tracking
- Admin operations

## 🛠️ Technology Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **SQLite3** - Lightweight database
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📦 Project Structure

```
backend/
├── src/
│   ├── index.ts              # Entry point
│   ├── config/
│   │   └── db.ts             # Database configuration
│   ├── controllers/
│   │   ├── userController.ts # User operations
│   │   └── planController.ts # Plan operations
│   ├── routes/
│   │   ├── userRoutes.ts     # User endpoints
│   │   └── planRoutes.ts     # Plan endpoints
│   ├── models/
│   │   └── types.ts          # TypeScript interfaces
│   ├── middleware/           # Express middleware
│   └── utils/
│       └── planGenerator.ts  # Utility functions
├── dist/                     # Compiled JavaScript
├── schema.sql               # Database schema
├── package.json
├── tsconfig.json
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js v16+
- npm v7+

### Installation

```bash
cd backend
npm install
```

### Configuration

Create a `.env` file in the backend directory:

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=./database.sqlite
JWT_SECRET=your_secret_key_here
```

### Running the Server

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm run build
npm start
```

**Test**:
```bash
npm test
```

## 📚 API Endpoints

### User Routes (`/api/users`)

#### Register User
```
POST /api/users/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "firstName": "John",
  "lastName": "Doe"
}

Response: 201 Created
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "firstName": "John",
  "lastName": "Doe"
}
```

#### Login User
```
POST /api/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}

Response: 200 OK
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

#### Get User Profile
```
GET /api/users/profile
Authorization: Bearer <token>

Response: 200 OK
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "createdAt": "2025-12-31T10:00:00Z"
}
```

#### Update User Profile
```
PUT /api/users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "firstName": "Jonathan",
  "lastName": "Doe"
}

Response: 200 OK
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "firstName": "Jonathan",
  "lastName": "Doe"
}
```

### Plan Routes (`/api/plans`)

#### Get All Plans
```
GET /api/plans

Response: 200 OK
[
  {
    "id": 1,
    "name": "Beginner Fitness Plan",
    "description": "Perfect for beginners",
    "type": "fitness",
    "duration": 30,
    "price": 29.99,
    "createdAt": "2025-12-31T10:00:00Z"
  },
  {
    "id": 2,
    "name": "Vegan Meal Plan",
    "description": "Plant-based nutrition",
    "type": "meal",
    "duration": 30,
    "price": 19.99,
    "createdAt": "2025-12-31T10:00:00Z"
  }
]
```

#### Get Specific Plan
```
GET /api/plans/:id

Response: 200 OK
{
  "id": 1,
  "name": "Beginner Fitness Plan",
  "description": "Perfect for beginners",
  "type": "fitness",
  "duration": 30,
  "price": 29.99,
  "content": "Plan details here...",
  "createdAt": "2025-12-31T10:00:00Z"
}
```

#### Create Plan (Admin Only)
```
POST /api/plans
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "name": "Advanced Fitness Plan",
  "description": "For experienced users",
  "type": "fitness",
  "duration": 60,
  "price": 49.99,
  "content": "Detailed plan content..."
}

Response: 201 Created
{
  "id": 3,
  "name": "Advanced Fitness Plan",
  "description": "For experienced users",
  "type": "fitness",
  "duration": 60,
  "price": 49.99,
  "createdAt": "2025-12-31T10:00:00Z"
}
```

#### Update Plan (Admin Only)
```
PUT /api/plans/:id
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "name": "Updated Plan Name",
  "price": 39.99
}

Response: 200 OK
{
  "id": 1,
  "name": "Updated Plan Name",
  "price": 39.99
}
```

#### Delete Plan (Admin Only)
```
DELETE /api/plans/:id
Authorization: Bearer <admin_token>

Response: 200 OK
{
  "message": "Plan deleted successfully"
}
```

## 🗄️ Database Schema

### Users Table
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  firstName TEXT,
  lastName TEXT,
  role TEXT DEFAULT 'user',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Plans Table
```sql
CREATE TABLE plans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL,
  duration INTEGER,
  price REAL,
  content TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### User Subscriptions Table
```sql
CREATE TABLE user_subscriptions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId INTEGER NOT NULL,
  planId INTEGER NOT NULL,
  subscriptionDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expiryDate TIMESTAMP,
  status TEXT DEFAULT 'active',
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (planId) REFERENCES plans(id)
);
```

See [schema.sql](schema.sql) for complete schema.

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication:

1. User logs in and receives a token
2. Token is included in `Authorization` header for protected routes
3. Token is verified on each request

```
Authorization: Bearer <jwt_token>
```

## 🧪 Testing

```bash
npm test
```

## 🐛 Troubleshooting

### Database Lock Errors
```bash
rm -f database.sqlite
npm run dev
```

### Port Already in Use
```bash
# Change PORT in .env file or kill the process:
# On Windows: netstat -ano | findstr :3000 and taskkill
# On macOS/Linux: lsof -i :3000 and kill -9 <PID>
```

### TypeScript Compilation Errors
```bash
npm install
npm run build
```

## 📝 Environment Variables

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database
DATABASE_URL=./database.sqlite

# Security
JWT_SECRET=your_secret_key_here
JWT_EXPIRES_IN=7d
```

## 📝 File Migration Scripts

The project includes migration scripts for database management:

- `migrate.js` - Main migration runner
- `migrate_history.js` - Migration history tracking
- `migrate_plans.js` - Plan data migrations
- `setup-admin.js` - Initialize admin user

Run migrations:
```bash
node migrate.js
```

## 📄 Scripts

- `npm run dev` - Start development server with auto-reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run production server
- `npm test` - Run tests

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Commit with clear messages
5. Push and create a pull request

## 📄 License

ISC License

## 👤 Author

**Balaganesang** - balaganesan.it23@gmail.com

---

For more information, see the main [README.md](../README.md)
