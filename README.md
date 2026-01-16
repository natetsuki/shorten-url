# URL Shortener - Full Stack Application

A modern URL shortener web application built with Node.js, Express, React, and MongoDB.

## Features

- 🔗 Create short, shareable links
- 📊 Track URL clicks
- 🗑️ Delete URLs
- 💾 Persistent MongoDB storage
- 🎨 Beautiful, responsive UI

## Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: React
- **Database**: MongoDB
- **Styling**: CSS3

## Prerequisites

- Node.js (v14+)
- npm or yarn
- MongoDB (or Docker)

## Installation & Setup

### 1. Start MongoDB

**Option A: Using Docker (Recommended)**
```bash
docker-compose up -d
```

**Option B: Local MongoDB**
```bash
# Make sure MongoDB is running on localhost:27017
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/shorten-url
NODE_ENV=development
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
```

## Running the Application

### Terminal 1: Start Backend Server
```bash
cd backend
npm run dev
```
Server will run on: `http://localhost:5000`

### Terminal 2: Start Frontend Application
```bash
cd frontend
npm start
```
Frontend will open at: `http://localhost:3000`

## API Endpoints

- **POST** `/api/urls/shorten` - Create a short URL
  ```json
  { "longUrl": "https://example.com/very/long/url" }
  ```

- **GET** `/api/urls` - Get all URLs

- **GET** `/api/urls/:shortCode` - Redirect to original URL

- **DELETE** `/api/urls/:id` - Delete a URL

## Project Structure

```
shorten-url/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Url.js
│   ├── routes/
│   │   └── urls.js
│   ├── controllers/
│   │   └── urlController.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── UrlShortener.js
│   │   │   ├── UrlList.js
│   │   │   └── UrlItem.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   │   └── index.html
│   └── package.json
├── docker-compose.yml
└── README.md
```

## Development

- Backend auto-reloads with `nodemon`
- Frontend auto-reloads on file changes
- Use React DevTools for debugging

## Troubleshooting

**MongoDB Connection Error**
- Ensure MongoDB is running: `docker-compose up -d`
- Check if port 27017 is available

**Port Already in Use**
- Backend: Change PORT in `.env`
- Frontend: Port 3000 can usually be freed by stopping other React apps

**CORS Errors**
- Ensure backend is running on localhost:5000
- Frontend has `"proxy": "http://localhost:5000"` in package.json

## Next Steps

1. ✅ Set up the project
2. ✅ Install dependencies
3. ✅ Start MongoDB with Docker
4. ✅ Run the backend and frontend servers
5. 📦 **Optional**: Containerize with Docker
6. 🚀 **Deploy**: Host on a server or cloud platform

## License

MIT