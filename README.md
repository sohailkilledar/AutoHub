# AutoHub – Luxury Car Marketplace

Welcome to **AutoHub**, a premium car-selling React + Redux application built for learning and Coursera submission. This project allows users to browse luxury cars, add them to a shopping cart, and manage their selections in a fully functional cart system.

---

## Features

### Landing Page
- Hero image with luxury cars
- Company tagline: “Drive Your Dream”
- Get Started button navigating to products
- About section describing the company

### Product Listing Page
- Displays 6 unique cars
- Cars grouped into 3 categories: Electric, Sports, SUV
- Each car card shows image, name, price
- Add to Cart button with:
  - Cart count increment
  - Button disables when added
  - Product added to Redux store

### Header
- Visible on all pages
- Navigation: Home, Products, Cart
- Cart icon displays total number of items dynamically

### Cart Page
- Displays all cars added to cart with thumbnail, name, unit price
- Increase / Decrease quantity buttons
- Delete item button
- Total items and total cost dynamically updated
- Checkout button (Coming Soon)
- Continue Shopping button navigates back to Products

---

## Technologies Used
- **React 18**
- **Redux Toolkit**
- **React Router DOM**
- **Vite** (Development Server & Build)
- CSS for styling

---

## How to Run Locally

1. Clone the repository:

```bash
git clone <your-repo-url>
cd car-marketplace
