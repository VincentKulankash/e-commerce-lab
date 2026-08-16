# E-Commerce Admin Portal

A full-featured e-commerce admin portal built with React, Vite, and JSON Server.

## Features

- Landing Page with dynamic categories
- Product listing with category filtering
- Add Product form with validation
- Search functionality
- API integration with JSON Server
- CRUD operations
- Client-side routing with React Router
- Custom hooks for state management
- Responsive design
- Dark mode support

## Tech Stack

- React 18 + Vite
- React Router v6
- JSON Server (mock API)
- CSS with dark mode support

## How to Run

1. Clone the repository:
   git clone https://github.com/VincentKulankash/e-commerce-lab.git

2. Navigate to the project:
   cd e-commerce-lab/e-commerce-app

3. Install dependencies:
   npm install

4. Start JSON Server (Terminal 1):
   npm run server

5. Start React App (Terminal 2):
   npm run dev

6. Open http://localhost:5173

## API Endpoints

- GET /products - Get all products
- GET /products/:id - Get single product
- POST /products - Add new product
- PATCH /products/:id - Update product
- DELETE /products/:id - Delete product
- GET /products?q=query - Search products

## Project Structure

e-commerce-app/
├── src/
│   ├── components/
│   │   ├── NavBar.jsx
│   │   ├── LandingPage.jsx
│   │   ├── ProductPage.jsx
│   │   ├── FormPage.jsx
│   │   ├── ProductCard.jsx
│   │   └── Search.jsx
│   ├── hooks/
│   │   └── useProducts.js
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── main.jsx
├── db.json
└── package.json

## GitHub Repository

https://github.com/VincentKulankash/e-commerce-lab
