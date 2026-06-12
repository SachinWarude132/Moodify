# Modify - AI Mood-Based Music Recommendation Platform

## Overview

Modify is a full-stack web application that detects a user's facial expression using AI-powered face analysis and recommends music based on the detected mood. The platform combines computer vision, machine learning, and modern web technologies to create a personalized music experience.

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Persistent Login Sessions
* Secure Logout

### Mood Detection

* Real-time facial expression detection
* AI-powered emotion recognition
* Camera integration
* Automatic mood classification

### Music Recommendation

* Mood-based song recommendations
* Multiple songs for each emotion
* Randomized song selection
* Music playback controls

### User Experience

* Responsive design
* Modern UI
* Fast performance
* Secure authentication flow

---

## Tech Stack

### Frontend

* React.js
* React Router
* Axios
* SCSS

### Backend

* Node.js
* Express.js
* JWT Authentication
* Bcrypt.js

### Database

* MongoDB
* Mongoose

### Caching

* Redis

### AI / Machine Learning

* Google MediaPipe
* Face Landmarker
* Facial Expression Detection

---

## Project Structure

```text
Modify/
├── Frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── context/
│   └── services/
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd Modify
```

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd Backend
npm install
npm run dev
```

---

## Environment Variables

### Backend (.env)

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
REDIS_URL=your_redis_connection_string
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:3000
```

---

## Authentication Flow

1. User registers an account.
2. Password is hashed using Bcrypt.
3. JWT token is generated after successful login.
4. Token is stored in HTTP-only cookies.
5. Protected routes verify authentication status.
6. User session is restored automatically on refresh.

---

## Future Improvements

* Playlist generation
* Spotify integration
* User listening history
* Favorites and likes
* Advanced recommendation engine
* More facial expressions and emotion categories
* Admin dashboard

---

## Author

Sachin Warude

Aspiring Full-Stack Developer focused on building AI-powered web applications using the MERN stack.
