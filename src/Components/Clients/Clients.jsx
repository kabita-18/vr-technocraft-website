import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from "../../Logos/logo1.png";
import logo2 from "../../Logos/logo.2.png";
import logo3 from "../../Logos/logo3.png";
import logo4 from "../../Logos/logo4.png";
import logo5 from "../../Logos/logo5.png";
import logo6 from "../../Logos/logo6.png";
import logo7 from "../../Logos/logo7.png";
import logo8 from "../../Logos/logo8.png";
import logo9 from "../../Logos/logo.9.png";
import logo10 from "../../Logos/logo9.png";
import logo11 from "../../Logos/logo10.jpg";
import logo12 from "../../Logos/logo11.jpg";
import logo13 from "../../Logos/logo13.jpg";
import "./Clients.css"
const Clients = () => {
  return (
    <div>
      <h1 className='text-center' id="client"> Our Clients</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 8,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 6,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        
          <img className="m-2 carausel-item"  src={logo1} />
          <img className="m-2 carausel-item" src={logo2} />
          <img className="m-2 carausel-item" src={logo3} />
          <img className="m-2 carausel-item" src={logo4} />
          <img className="m-2 carausel-item" src={logo5} />
          <img className="m-2 carausel-item" src={logo6} />
          <img className="m-2 carausel-item" src={logo7} />
          <img className="m-2 carausel-item" src={logo8} />
          <img className="m-2 carausel-item" src={logo9} />
          <img className="m-2 carausel-item" src={logo10} />
          <img className="m-2 carausel-item" src={logo11} />
          <img className="m-2 carausel-item" src={logo12} />
          <img className="m-2 carausel-item" src={logo13} />
        
      </Carousel>
    </div>
  );
};

export default Clients;
