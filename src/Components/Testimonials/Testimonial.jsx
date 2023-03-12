import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <>
      <h1 className="text-center">Testimonials Stories</h1>
      
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
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
                items: 4,
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
                items: 2,
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
            <TestimonialCard
              description="React Carousel with Server Side Rendering Support – Part 1"
              headline="w3js.com"
              image="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
            />
            <TestimonialCard
              description="React Carousel with Server Side Rendering Support – Part 2"
              headline="w3js.com"
              image="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
            />
            <TestimonialCard
              description="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
              headline="w3js.com"
              image="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
            />
            <TestimonialCard
              description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
              headline="w3js.com"
              image="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
            />
            <TestimonialCard
              description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
              headline="w3js.com"
              image="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
            />
            <TestimonialCard
              description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
              headline="w3js.com"
              image="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
            />
            <TestimonialCard
              description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
              headline="w3js.com"
              image="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
            />
            <TestimonialCard
              description="React Carousel with Server Side Rendering Support – Part 2"
              headline="w3js.com"
              image="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
            />
            
            
            
            
          </Carousel>
        
    </>
  );
};

export default Testimonial;
