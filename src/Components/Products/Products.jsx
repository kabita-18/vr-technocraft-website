import React,{ useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Products.css";
import Modal from "react-bootstrap/Modal";
import {productDetails} from "../../data"


const photoStyle = {
  width:"455px",
  height:"400px",
  position:"relative",
  margin:"auto",
  
  
  
}


const Products = () => {
  
  const [show, setShow] = useState(false);
  const [productData, setproductData] = useState([]);
  const [product, setProduct] = useState({});

  useEffect(()=>{
    setproductData(productDetails)
  },[])


  const handleClose = () => setShow(false);
  const handleShow = (displayProduct) =>{
    setProduct(displayProduct)
    setShow(true);
  } 
  console.log(productDetails)
  return (
    <div>
      <h1 className="text-center m-5">Solution Overview</h1>

      <div className="wrapper">
        <div className="d-flex flex-wrap justify-content-evenly">
          {
            productData.map((product, i)=>(
              <Card key={i} className="m-3" style={{ width: "15rem" }}>
            <Card.Img variant="top" src={product.image} style={{ height: "10rem" }} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text className="product-style">
              {product.description}
              </Card.Text>

              <Button variant="dark" onClick={()=>handleShow(product)}>
                Load More
              </Button>            
            </Card.Body>
          </Card>
            )

            )
          }
          <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>{product.name}
                  </Modal.Title>
                  
                </Modal.Header>
                <Modal.Body>
                  <div>
                <img src={product.image}  style={photoStyle} />
                <div style={{ whiteSpace: "pre-wrap"}}>
                </div>
                  {product.description}
                </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
          
        </div>
      </div>
    </div>
  );
};

export default Products;
