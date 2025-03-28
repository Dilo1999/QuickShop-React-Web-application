import React, { useState, useEffect } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';  // Import the cart icon
import axios from 'axios';

function SecondScreen() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products from FakeStore API
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize with all products
      })
      .catch(error => console.log(error));

    // Load cart from localStorage if available
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Filter products based on search query and category
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterProducts(query, selectedCategory);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterProducts(searchQuery, category);
  };

  const handleAllProducts = () => {
    setSelectedCategory('');
    setSearchQuery('');
    setFilteredProducts(products); // Reset to all products
  };

  const filterProducts = (query, category) => {
    let filtered = products;

    if (category === 'Under $20') {
      filtered = filtered.filter(product => product.price < 20);
    } else if (category && category !== 'All') {
      filtered = filtered.filter(product => product.category === category);
    }

    if (query) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  // Add product to cart
  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
    alert(`${product.title} added to cart!`);
  };

  return (
    <div>
      {/* Cart Icon in the top-right corner */}
      <div style={{ position: 'absolute', top: '40px', right: '40px' }}>
        <Link to="/cart">
          <FaShoppingCart size={60} color="black" />
          <span 
            style={{
              position: 'absolute',
              top: '-5px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '50%',
              padding: '5px 10px',
              fontSize: '14px',
            }}
          >
            {cart.length}
          </span>
        </Link>
      </div>

      <div className="container text-center mt-5">
        <h1><b>Welcome to the Online Shopping</b></h1>

        {/* Category Selection */}
        <div className="mt-3">
          <Button variant="outline-primary" className="mx-2" onClick={handleAllProducts}>All</Button>
          <Button variant="outline-primary" className="mx-2" onClick={() => handleCategoryChange('electronics')}>Electronics</Button>
          <Button variant="outline-primary" className="mx-2" onClick={() => handleCategoryChange("men's clothing")}>Men's Clothing</Button>
          <Button variant="outline-primary" className="mx-2" onClick={() => handleCategoryChange("women's clothing")}>Women's Clothing</Button>
          <Button variant="outline-primary" className="mx-2" onClick={() => handleCategoryChange('jewelery')}>Jewelry</Button>
          <Button variant="outline-primary" className="mx-2" onClick={() => handleCategoryChange('Under $20')}>Under $20</Button>
        </div>

        {/* Search Bar */}
        <div className="mt-3">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </InputGroup>
        </div>
      </div>

      {/* Product Display */}
      <div className="container mt-5">
        <h2>Products</h2>
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="card-img-top" 
                    style={{ height: '200px', objectFit: 'cover' }} 
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                    <div className="d-flex gap-2">
                      <Button variant="success" className="w-50" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                      <Link to={`/product/${product.id}`} className="w-50">
                        <Button variant="info" className="w-100">View Details</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>

     
    </div>
  );
}

export default SecondScreen;
