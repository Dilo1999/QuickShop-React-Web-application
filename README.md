# E-commerce Shopping Application

A simple e-commerce shopping app built with **React**, **React Router**, **React Bootstrap**, and **Axios**. This project demonstrates a functional e-commerce store with features such as product search, filtering by categories, product details, and a shopping cart.

## Features
- **Browse Products**: View products fetched from the FakeStore API.
- **Category Filtering**: Filter products by category (e.g., Electronics, Men's Clothing, Women's Clothing, Jewelry).
- **Search**: Search for products based on the product title.
- **Product Details**: View detailed information about a product.
- **Shopping Cart**: Add products to the cart and view the cart at any time. The cart is stored in **localStorage** to persist across sessions.
- **Cart Icon**: A cart icon at the top right of the page shows the number of items in the cart. Clicking on the icon navigates to the cart page.

## Screens
1. **First Screen**: Introduction page with a link to navigate to the second screen.
2. **Second Screen**: Displays products with filtering options and a search bar.
3. **Product Details Page**: Displays detailed information about a single product.
4. **Cart Page**: Displays items added to the cart, allowing users to view and manage their shopping cart.

## Technologies Used
- **React**: Frontend framework.
- **React Router**: For routing and navigation between different pages.
- **React Bootstrap**: UI components for a responsive design.
- **Axios**: For making HTTP requests to fetch products from the FakeStore API.
- **localStorage**: For persisting cart data across sessions.

## Installation

To get started, clone this repository and install the required dependencies:

```bash
git clone https://github.com/Dilo1999/ecommerce-shopping-app.git
cd ecommerce-shopping-app
npm install


/src
  /Screen
    FirstScreen.js          // Introduction screen
    SecondScreen.js         // Product listing and filtering
    ProductDetails.js       // Product details page
    CartScreen.js           // Cart page
  /App.js                   // Main App component and routing
  /App.css                  // Global styles
  /index.js                 // Entry point of the app

