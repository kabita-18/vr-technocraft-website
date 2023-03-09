import React from "react";
import Badge from 'react-bootstrap/Badge';
import './ProductNews.css'

const handleClick = (e) => {
    console.log(e.target.innerText)
}


const ProductNews = () => {
    
  return (
    <>

    <h1 className="text-center m-5"> Explore Our Stories </h1>
    <div className="wrapper">
    <div className="badges ">
     <Badge bg="dark" onClick={handleClick} >
        All Stories
      </Badge>{' '}
      <Badge bg="dark" onClick={handleClick}>
        Products News
      </Badge>{' '}
      <Badge bg="dark" onClick={handleClick}>
       Trends & Technologies
      </Badge>{' '}
      <Badge bg="dark" onClick={handleClick}>
        Customer Services
      </Badge>{' '}
      </div>
      </div>
    </>
    
  );
};

export default ProductNews;
