# Smart Fitness and Meal Planner

A comprehensive web application designed to help users manage their fitness routines and meal plans. This full-stack application features user authentication, personalized fitness tracking, meal planning, progress monitoring, and an admin dashboard for system management.

## 🎯 Features

### User Features
- **User Authentication**: Secure login and registration system
- **Fitness Routine Management**: Create and track customized workout routines
- **Meal Planning**: Plan meals with nutritional information
- **Progress Tracking**: Monitor fitness progress with visual analytics
- **User Profile**: Manage personal information and preferences
- **Plan Management**: Subscribe to and manage fitness/meal plans

### Admin Features
- **Admin Dashboard**: Comprehensive admin control panel
- **User Management**: Manage users and their subscriptions
- **Plan Management**: Create and manage fitness and meal plans
- **Analytics**: View user engagement and system statistics

## 📋 Project Structure

```
smart-fitness-and-meal-planer/
├── backend/              # Express.js backend server
│   ├── src/
│   │   ├── index.ts      # Application entry point
│   │   ├── config/       # Database configuration
│   │   ├── controllers/  # API controllers
│   │   ├── routes/       # API routes
│   │   ├── models/       # Data models and types
│   │   ├── middleware/   # Express middleware
│   │   └── utils/        # Utility functions
│   ├── package.json
│   ├── tsconfig.json
│   └── schema.sql        # Database schema
│
├── frontend/             # Angular frontend application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/    # Angular components
│   │   │   │   ├── admin-dashboard/
│   │   │   │   ├── login/
│   │   │   │   ├── register/
│   │   │   │   ├── profile/
│   │   │   │   ├── meal-planner/
│   │   │   │   ├── workout-routine/
│   │   │   │   └── progress-tracker/
│   │   │   ├── services/      # Angular services
│   │   │   ├── guards/        # Route guards
│   │   │   └── routes/        # Route configuration
│   │   ├── styles.css         # Global styles
│   │   └── index.html         # Main HTML file
│   ├── package.json
│   └── angular.json
│
└── README.md            # This file
```

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express.js
- **TypeScript** for type safety
- **SQLite3** for database
- **CORS** for cross-origin requests
- **dotenv** for environment variables

### Frontend
- **Angular 18+** framework
- **TypeScript** for type safety
- **Angular Routing** for navigation
- **Angular Services** for API communication
- **CSS** for styling

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)
- Angular CLI (optional, but recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Balaganesang/smart-fitness-and-meal-planer.git
   cd smart-fitness-and-meal-planer
   ```

2. **Install dependencies for both frontend and backend**
   ```bash
   npm run install:all
   ```
   
   Or manually:
   ```bash
   # Backend
   cd backend
   npm install
   cd ..
   
   # Frontend
   cd frontend
   npm install
   cd ..
   ```

### Running the Application

**Option 1: Run both backend and frontend concurrently**
```bash
npm run dev
```
This will start:
- Backend on `http://localhost:3000` (or configured port)
- Frontend on `http://localhost:4200`

**Option 2: Run separately**

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm start
```

## 📚 API Documentation

### Backend Routes

#### User Routes
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

#### Plan Routes
- `GET /api/plans` - Get all available plans
- `GET /api/plans/:id` - Get specific plan
- `POST /api/plans` - Create new plan (Admin only)
- `PUT /api/plans/:id` - Update plan (Admin only)
- `DELETE /api/plans/:id` - Delete plan (Admin only)

## 🗄️ Database

The application uses SQLite3 with the following main tables:
- `users` - User accounts and authentication
- `plans` - Fitness and meal plans
- `user_subscriptions` - User plan subscriptions
- `progress` - User progress tracking

See [backend/schema.sql](backend/schema.sql) for complete database schema.

## 🔐 Authentication

The application implements authentication using:
- JWT tokens for API authentication
- Auth Guards for route protection
- Session management with secure cookies

Protected routes require valid authentication tokens.

## 📱 Frontend Components

- **Login Component**: User authentication
- **Register Component**: New user registration
- **Admin Dashboard**: Admin management interface
- **Profile Component**: User profile management
- **Meal Planner Component**: Browse and plan meals
- **Workout Routine Component**: View and track workouts
- **Progress Tracker Component**: Monitor fitness progress

## 🧪 Testing

### Backend
```bash
cd backend
npm test
```

### Frontend
```bash
cd frontend
npm test
```

## 📦 Building for Production

### Backend
```bash
cd backend
npm run build
npm start
```

### Frontend
```bash
cd frontend
ng build --configuration production
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Environment Variables

Create a `.env` file in the backend folder:
```env
PORT=3000
NODE_ENV=development
DATABASE_URL=./database.sqlite
JWT_SECRET=your_jwt_secret_key
```

## 🐛 Troubleshooting

### Port already in use
Change the port in backend configuration or environment variables.

### Database errors
Ensure SQLite3 is properly installed and the database file has write permissions.

### CORS errors
Check that frontend and backend URLs are correctly configured in the CORS middleware.

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Balaganesang**
- Email: balaganesan.it23@gmail.com
- GitHub: [@Balaganesang](https://github.com/Balaganesang)

## 📞 Support

For support, email balaganesan.it23@gmail.com or create an issue in the GitHub repository.

---

**Last Updated**: February 2026
