import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';  // Import useParams to get the product ID
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';  // Import the cart icon

function ProductDetails() {
  const { id } = useParams();  // Extract product ID from URL
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch product details using the product ID
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => console.log(error));

    // Load cart from localStorage if available
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, [id]);

  // Add product to cart
  const handleAddToCart = () => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
    alert(`${product.title} added to cart!`);
  };

  if (!product) return <div>Loading...</div>;

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

      <div className="container mt-5">
        <h1>{product.title}</h1>
        <div className="row">
          <div className="col-md-6">
            <img 
              src={product.image} 
              alt={product.title} 
              className="img-fluid" 
              style={{ height: '500px', objectFit: 'cover' }} 
            />
          </div>
          <div className="col-md-6">
            <h3>${product.price}</h3>
            <p><strong>Category:</strong> {product.category}</p>
            <p>{product.description}</p><br></br>
            <Button variant="success" className="mb-3" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
