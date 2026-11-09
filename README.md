# Paradise Nursery Shopping Application

A responsive plant shop built with React, React Router, Redux Toolkit and CSS.

## Features
- Landing page with company introduction and call to action.
- Plant catalogue with 18 houseplants in three categories.
- Add-to-cart functionality with disabled buttons for products already added.
- Dynamic cart item count in the navigation bar.
- Increase/decrease quantities, remove items and calculate subtotals and grand total.
- Responsive layout for desktop and mobile.

## Getting started
1. Install [Node.js](https://nodejs.org/).
2. Open this project folder in a terminal.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL shown by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Technology
- React + Vite
- React Router
- Redux Toolkit + React Redux
- Lucide React icons
- CSS

## Project structure
```text
src/
  components/
    AboutUs.jsx
    Navbar.jsx
    ProductList.jsx
    CartItem.jsx
  redux/
    CartSlice.jsx
    store.js
  App.jsx
  App.css
  main.jsx
```

Plant photos are loaded from Unsplash and therefore require an internet connection.
