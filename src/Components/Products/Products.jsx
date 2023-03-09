import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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
import "./Products.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Products = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1 className="text-center m-5">Solution Overview</h1>

      <div className="wrapper">
        <div className="d-flex flex-wrap justify-content-evenly">
          <Card className="m-3" style={{ width: "15rem" }}>
            <Card.Img variant="top" src={photo1} style={{ height: "10rem" }} />
            <Card.Body>
              <Card.Title>Access Control System</Card.Title>
              <Card.Text>
                An access control system is a security mechanism designed to
                regulate who has access to specific resources, such as
                buildings, rooms, or computer systems.
              </Card.Text>

              <Button variant="dark" onClick={handleShow}>
                Load More
              </Button>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Access Control System</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Access control systems use a variety of technologies, such
                    as passwords, biometric identification (fingerprint, retina,
                    face), access cards, key fobs, and smart phones to
                    authenticate and authorize access. Access can be granted or
                    denied based on the identity of the user, time of day,
                    location, and other factors.
                  </p>
                  ACS can be implemented in a variety of environments, including
                  homes, offices, data centers, airports, hospitals, and other
                  public places. ACS can also be integrated with other security
                  systems, such as CCTV cameras, intrusion detection systems,
                  and alarms to provide a more comprehensive security solution.
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
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "15rem" }}>
            <Card.Img variant="top" src={photo2} style={{ height: "10rem" }} />
            <Card.Body>
              <Card.Title>CCTV</Card.Title>
              <Card.Text>
                CCTV stands for "closed-circuit television." It is a type of
                video surveillance system that uses cameras to monitor and
                record activity in a specific area.
              </Card.Text>
              <Button variant="dark" onClick={handleShow}>
                Load More
              </Button>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Closed-Circuit Television</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    CCTV systems are commonly used for security and surveillance
                    purposes in public places, businesses, and private
                    residences. They can be used to deter crime, monitor
                    traffic, and help law enforcement investigate criminal
                    activity.
                  </p>
                  <p>
                    CCTV systems can be used for a variety of purposes,
                    including preventing crime, monitoring traffic, and
                    improving public safety. The recorded footage can also be
                    used as evidence in legal proceedings. CCTV systems
                    typically use analog or digital video cameras, and the
                    footage can be stored on digital video recorders (DVRs) or
                    network video recorders (NVRs).
                  </p>
                  With advancements in technology, some CCTV systems now use
                  artificial intelligence and machine learning algorithms to
                  automatically detect and analyze activity in the video
                  footage.
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
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "15rem" }}>
            <Card.Img variant="top" src={photo3} style={{ height: "10rem" }} />
            <Card.Body>
              <Card.Title>Fire Alarm System</Card.Title>
              <Card.Text>
                A fire alarm system is a network of devices that work together
                to detect and warn people about the presence of a fire in a
                building or structure.
              </Card.Text>
              <Button variant="dark">Load More</Button>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "15rem" }}>
            <Card.Img variant="top" src={photo4} style={{ height: "10rem" }} />
            <Card.Body>
              <Card.Title>Fire Extinguisher</Card.Title>
              <Card.Text>
                A fire extinguisher is a portable device that is used to put out
                small fires or contain them until professional firefighters
                arrive.
              </Card.Text>
              <Button variant="dark" onClick={handleShow}>
                Load More
              </Button>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Fire Alarm System</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    The system consists of various components, such as smoke
                    detectors, heat detectors, manual pull stations, and
                    audible/visual notification appliances.
                  </p>
                  <p>
                    When a fire is detected by one of the sensors, the fire
                    alarm control panel (FACP) receives the signal and activates
                    the alarm, triggering the notification appliances to sound
                    and/or flash. This alert allows people in the building to
                    evacuate safely and quickly.
                  </p>
                  Fire alarm systems can also be connected to a monitoring
                  service that can alert emergency responders in the event of a
                  fire, allowing for a faster response time and potentially
                  saving lives and property. It is important to regularly test
                  and maintain fire alarm systems to ensure they are functioning
                  correctly in case of an emergency.
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
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "15rem" }}>
            <Card.Img variant="top" src={photo5} style={{ height: "10rem" }} />
            <Card.Body>
              <Card.Title>Fire Hydrant System</Card.Title>
              <Card.Text>
                A Fire Hydrant System is a type of fire protection system that
                consists of a network of pipes, valves, and hydrants that are
                installed throughout a building or property to provide a
                reliable source of water for firefighting purposes.
              </Card.Text>
              <Button variant="dark" onClick={handleShow}>
                Load More
              </Button>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Fire Hydrant System</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    The system is designed to deliver a high volume of water at
                    a high pressure to extinguish fires quickly and efficiently.
                    Fire hydrants are usually located outside a building or in
                    public areas and are connected to the water supply through
                    underground pipes.
                  </p>
                  <p>
                    {" "}
                    The system includes a water supply, such as a municipal
                    water supply or a dedicated water storage tank, a fire pump
                    to increase the pressure of the water, and a network of
                    pipes and valves that distribute the water to the hydrants.
                    The hydrants are equipped with valves that allow
                    firefighters to control the flow of water and attach hoses
                    to access the water supply.
                  </p>
                  Fire hydrant systems are an essential component of fire safety
                  in buildings and public spaces. They are used by firefighters
                  to control and extinguish fires and can also provide water for
                  other emergency situations, such as floods or earthquakes.
                  Regular maintenance and testing are crucial to ensure that the
                  system is operational and reliable in case of an emergency.
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
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "15rem" }}>
            <Card.Img variant="top" src={photo6} style={{ height: "10rem" }} />
            <Card.Body>
              <Card.Title>Fire Suppression System</Card.Title>
              <Card.Text>
                Fire suppression systems are designed to quickly and effectively
                control or extinguish a fire, reducing damage to property and
                the risk of injury or loss of life.
              </Card.Text>
              <Button variant="dark" onClick={handleShow}>
                Load More
              </Button>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Access Control System</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Access control systems use a variety of technologies, such
                    as passwords, biometric identification (fingerprint, retina,
                    face), access cards, key fobs, and smart phones to
                    authenticate and authorize access. Access can be granted or
                    denied based on the identity of the user, time of day,
                    location, and other factors.
                  </p>
                  ACS can be implemented in a variety of environments, including
                  homes, offices, data centers, airports, hospitals, and other
                  public places. ACS can also be integrated with other security
                  systems, such as CCTV cameras, intrusion detection systems,
                  and alarms to provide a more comprehensive security solution.
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
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "15rem" }}>
            <Card.Img variant="top" src={photo7} style={{ height: "10rem" }} />
            <Card.Body>
              <Card.Title>PA System</Card.Title>
              <Card.Text>
                A PA system (Public Address system) is an electronic
                amplification system that is used to amplify sound, allowing it
                to be heard by a large group of people.
              </Card.Text>
              <Button variant="dark" onClick={handleShow}>
                Load More
              </Button>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Access Control System</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Access control systems use a variety of technologies, such
                    as passwords, biometric identification (fingerprint, retina,
                    face), access cards, key fobs, and smart phones to
                    authenticate and authorize access. Access can be granted or
                    denied based on the identity of the user, time of day,
                    location, and other factors.
                  </p>
                  ACS can be implemented in a variety of environments, including
                  homes, offices, data centers, airports, hospitals, and other
                  public places. ACS can also be integrated with other security
                  systems, such as CCTV cameras, intrusion detection systems,
                  and alarms to provide a more comprehensive security solution.
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
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "15rem" }}>
            <Card.Img variant="top" src={photo8} style={{ height: "10rem" }} />
            <Card.Body>
              <Card.Title>Rodent Repellent System</Card.Title>
              <Card.Text>
                Rodent repellent systems are often used in homes, businesses,
                and other facilities to prevent rodents from causing damage or
                spreading disease.
              </Card.Text>
              <Button variant="dark" onClick={handleShow}>
                Load More
              </Button>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Access Control System</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Access control systems use a variety of technologies, such
                    as passwords, biometric identification (fingerprint, retina,
                    face), access cards, key fobs, and smart phones to
                    authenticate and authorize access. Access can be granted or
                    denied based on the identity of the user, time of day,
                    location, and other factors.
                  </p>
                  ACS can be implemented in a variety of environments, including
                  homes, offices, data centers, airports, hospitals, and other
                  public places. ACS can also be integrated with other security
                  systems, such as CCTV cameras, intrusion detection systems,
                  and alarms to provide a more comprehensive security solution.
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
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "15rem" }}>
            <Card.Img variant="top" src={photo9} style={{ height: "10rem" }} />
            <Card.Body>
              <Card.Title>VESDA System</Card.Title>
              <Card.Text>
                VESDA stands for Very Early Smoke Detection Apparatus, which is
                a type of air sampling smoke detection system.
              </Card.Text>
              <Button variant="dark" onClick={handleShow}>
                Load More
              </Button>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Access Control System</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Access control systems use a variety of technologies, such
                    as passwords, biometric identification (fingerprint, retina,
                    face), access cards, key fobs, and smart phones to
                    authenticate and authorize access. Access can be granted or
                    denied based on the identity of the user, time of day,
                    location, and other factors.
                  </p>
                  ACS can be implemented in a variety of environments, including
                  homes, offices, data centers, airports, hospitals, and other
                  public places. ACS can also be integrated with other security
                  systems, such as CCTV cameras, intrusion detection systems,
                  and alarms to provide a more comprehensive security solution.
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
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "15rem" }}>
            <Card.Img variant="top" src={photo10} style={{ height: "10rem" }} />
            <Card.Body>
              <Card.Title>Water Leak Detection</Card.Title>
              <Card.Text>
                Water leak detection is the process of identifying the location
                and source of water leaks in a building or infrastructure
              </Card.Text>
              <Button variant="dark" onClick={handleShow}>
                Load More
              </Button>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Access Control System</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Access control systems use a variety of technologies, such
                    as passwords, biometric identification (fingerprint, retina,
                    face), access cards, key fobs, and smart phones to
                    authenticate and authorize access. Access can be granted or
                    denied based on the identity of the user, time of day,
                    location, and other factors.
                  </p>
                  ACS can be implemented in a variety of environments, including
                  homes, offices, data centers, airports, hospitals, and other
                  public places. ACS can also be integrated with other security
                  systems, such as CCTV cameras, intrusion detection systems,
                  and alarms to provide a more comprehensive security solution.
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
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Products;
