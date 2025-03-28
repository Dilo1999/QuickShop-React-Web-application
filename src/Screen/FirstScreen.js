// src/Screen/FirstScreen.js
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FirstScreen() {
  return (
    <div className="container text-center mt-5">
      <h1><b>Welcome to the Online Shopin Application</b></h1>
      
      {/* Adding the image here */}
      <img src={process.env.PUBLIC_URL + '/Daraz.jpg'} alt="Daraz" className="img-fluid mb-4" />
      
      {/* Button will appear below the image */}
      <Link to="/second">
        <br />
        <Button variant="primary" style={{ backgroundColor: '#f05924', borderColor: '#f05924' , fontSize:25}}>
          Go to Second Screen
        </Button>
      </Link>
    </div>
  );
}

export default FirstScreen;
