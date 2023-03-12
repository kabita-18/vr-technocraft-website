import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import * as Icons from "react-bootstrap-icons";

const starStyle = {
    display: "flex",
    justifyContent: "center"
}
function TestimonialCard({ description, headline, image }) {
  return (
    // <div className="wrapper">
    //   <div className="d-flex flex-wrap justify-content-center">
        <Card className="m-5" style={{ width: "18rem", border:"none" }}>
          <Card.Img variant="top" src={image} style={{ height: "10rem", width: "10rem", borderRadius:"50%", position: "relative", margin: "auto" }} />
          
          <Card.Body>
            <Card.Title className="text-center">{headline}</Card.Title>
            <Card.Text className="text-center">{description}</Card.Text>
            {/* <i class="bi bi-star-fill"></i> */}
            {/* <Icons.StarFill></Icons.StarFill> */}
            <span style={starStyle}>
              <Icons.StarFill icons="star" className="me-1 " />
              <Icons.StarFill icons="star" className="me-1 " />
              <Icons.StarFill icons="star" className="me-1 " />
              <Icons.StarFill icons="star" className="me-1 " />
              <Icons.StarHalf icons="star" className="me-1 " />
            </span>
            
          </Card.Body>
        </Card>
    //   </div>
    // </div>
  );
}

export default TestimonialCard;
