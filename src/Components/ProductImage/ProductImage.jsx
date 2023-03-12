import React from "react";
import photo1 from "../../Photos/Access Control System.jpg";
import photo2 from "../../Photos/CCTV.jpg";
import photo3 from "../../Photos/Fire Alarm System.jpg";
import photo4 from "../../Photos/Fire Extinguishers.jpg";
import photo5 from "../../Photos/Fire Hydrant System.jpg";
import photo6 from "../../Photos/Fire Suppression System.jpg";
import photo7 from "../../Photos/PA System1.jpg";
import photo8 from "../../Photos/Rodent Repellent System.jpg";
import photo9 from "../../Photos/VESDA System.jpg";
import photo10 from "../../Photos/Water Leak Detection.jpg";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./ProductImage.css";
import Collapse from 'react-bootstrap/Collapse';


function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

const ProductImage = () => {
  const [isLoading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  

  // const handleClick = () => setLoading(true);

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={photo1} alt="Access Control Sysytem" />

        <Carousel.Caption>
          <div>
            <span>
              <h3>Access Control Sysytem </h3>
              <Button variant="dark"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Our Service
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        An Access Control System (ACS) is a security system that controls access to a physical or digital space, device, or network by limiting who or what can enter, exit, or use the resources within that space. The primary goal of an ACS is to ensure that only authorized individuals or entities are granted access, while keeping unauthorized people or intruders out.

        </div>
      </Collapse>
            </span>
            
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={photo2} alt="CCTV" />

        <Carousel.Caption>
        <div>
            <span>
              <h3>CCTV</h3>
              <Button variant="dark"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Our Sevice
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        CCTV stands for "closed-circuit television." It is a type of video surveillance system that uses cameras to monitor and record activity in a specific area. The footage captured by the cameras is transmitted to a limited set of monitors or recording devices that are not publicly accessible, hence the term "closed-circuit." CCTV systems are commonly used for security and surveillance purposes in public places, businesses, and private residences. They can be used to deter crime, monitor traffic, and help law enforcement investigate criminal activity.

        </div>
      </Collapse>
            </span>
            
          </div>
          </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item>
        <img className="d-block w-100" src={photo3} alt="Fire Alarm System" />

        <Carousel.Caption>
            <span>
          <h3>Fire Alarm System</h3>
          <Button variant="dark"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Our Services
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        A fire alarm system is a network of devices that work together to detect and warn people about the presence of a fire in a building or structure. The system consists of various components, such as smoke detectors, heat detectors, manual pull stations, and audible/visual notification appliances.

        </div>
      </Collapse>
            </span>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={photo4} alt="Fire Extinguishers System" />
        <Carousel.Caption>
        <span>
          <h3>Fire Extinguishers </h3>
          <Button variant="dark"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Our Services
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        A fire extinguisher is a portable device that is used to put out small fires or contain them until professional firefighters arrive. It typically consists of a hand-held cylindrical pressure vessel containing an extinguishing agent such as water, foam, dry chemical, or carbon dioxide. When the user activates the extinguisher by pulling the safety pin and squeezing the handle, the agent is expelled from the nozzle or hose to extinguish the fire.

        </div>
      </Collapse>
            </span>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={photo5} alt="Fire Hydrant System" />
        <Carousel.Caption>
        <span>
          <h3>Fire Hydrant System</h3>
          <Button variant="dark"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Our Services
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        A Fire Hydrant System is a type of fire protection system that consists of a network of pipes, valves, and hydrants that are installed throughout a building or property to provide a reliable source of water for firefighting purposes.

        </div>
      </Collapse>
            </span>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={photo6} alt="First Suppression System" />
        <Carousel.Caption>
        <span>
          <h3>Fire Suppression System</h3>
          <Button variant="dark"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Our Services
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        A fire suppression system is a set of equipment and procedures designed to detect and suppress fires automatically in buildings or other areas. These systems use a combination of fire detection sensors, alarms, and fire suppression agents such as water, foam, or chemicals to control and extinguish fires.

        </div>
      </Collapse>
            </span>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={photo7} alt="PA System" />
        <Carousel.Caption>
        <span>
          <h3>PA System</h3>
          <Button variant="dark"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Our Services
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        A PA system (Public Address system) is an electronic amplification system that is used to amplify sound, allowing it to be heard by a large group of people. It is commonly used in public spaces such as schools, churches, airports, sports stadiums, and other venues where it is necessary to communicate with a large audience.

        </div>
      </Collapse>
            </span>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={photo8} alt="Rodent Repellent System" />
        <Carousel.Caption>
        <span>
          <h3>Rodent Repellent System</h3>
          <Button variant="dark"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Our Services
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        A Rodent Repellent System is a device that is designed to deter rodents, such as mice and rats, from entering a particular area. These systems use various methods to repel rodents, including ultrasonic sound waves, electromagnetic waves, and chemical deterrents.

        </div>
      </Collapse>
            </span>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={photo9} alt="VESDA System" />
        <Carousel.Caption>
        <span>
          <h3>VESDA System</h3>
          <Button variant="dark"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Our Services
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        VESDA stands for Very Early Smoke Detection Apparatus, which is a type of air sampling smoke detection system. It is designed to provide very early warning of potential fire hazards by continuously sampling the air for smoke particles.

        </div>
      </Collapse>            </span>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={photo10} alt="Water Leak Detection" />
        <Carousel.Caption>
        <span>
          <h3>Water Leak Detection</h3>
          <Button variant="dark"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Our Services
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        Water leak detection is the process of identifying the location and source of water leaks in a building or infrastructure. It involves using various tools and techniques to detect the presence of water leaks and determine their severity.

        </div>
      </Collapse>
            </span>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductImage;
