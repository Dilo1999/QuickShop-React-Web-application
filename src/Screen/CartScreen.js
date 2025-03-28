import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';


function CartScreen() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Remove product from cart
  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  return (
    <div className="container mt-5">
      <h2><center><b>Your Shopping Cart</b></center></h2><br></br>

      {cart.length > 0 ? (
        <div>
          <div className="row">
            {cart.map((product) => (
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
                    <Button 
                      variant="danger" 
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      Remove from Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <h4>Total: ${getTotalPrice()}</h4><br></br><br></br>
            <Button variant="success">Proceed to Checkout</Button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}

      
    </div>
  );
}

export default CartScreen;
