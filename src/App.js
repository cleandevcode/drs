import "./App.scss";
import { Col, Row } from "react-bootstrap";
import First from "./assets/1.png";
import Second from "./assets/2.png";
import Third from "./assets/3.png";
import Forth from "./assets/4.png";

function App() {
  const cards = [
    {
      id: 0,
      url: "https://www.derooijslotenspecialist.nl/",
      title: "derooijslotenspecialist.nl",
      image: First
    },
    {
      id: 1,
      url: "https://www.slotenmakerdrs.nl/",
      title: "slotenmakerdrs.nl",
      image: Second
    },
    {
      id: 2,
      url: "https://www.drsbeveiliging.nl/",
      title: "drsbeveiliging.nl",
      image: Third
    },
    {
      id: 3,
      url: "https://www.cerrajerodrs.es/",
      title: "cerrajero.es",
      image: Forth
    }
  ];
  return (
    <div className="app">
      <div className="container p-4 d-flex flex-column justify-content-between h-100">
        <div className="text-center">
          <h2>DRS SECURITYGROUP</h2>
          <h6 className="font-weight-normal">
            DRS securitygroup is a well-known and reliable security company. Our
            technicians are technically trained and offer a reliable and expert
            service that goes beyond just opening your front door.
          </h6>
          <h6 className="font-weight-normal my-3">View our websites here</h6>
        </div>
        <Row>
          {cards.map((item, index) => (
            <Col
              key={index}
              xs={{ span: 6 }}
              sm={{ span: 6 }}
              lg={{ span: 6 }}
              className="text-center p-2"
            >
              <div className="customCard p-3">
                <a href={item.url}>
                  <p className="text-overflow">{item.title}</p>
                  <img src={item.image} className="cardImg" alt={item.title} />
                </a>
              </div>
            </Col>
          ))}
          <div className="w-100 text-center">
            <p className="p-0 m-0">Email us for more information</p>
            <a href="mailto:info@drs-securitygroup.com">
              info@drs-securitygroup.com
            </a>
          </div>
        </Row>
        <p className="text-center w-100 p-4">All rights reserved 2021</p>
      </div>
    </div>
  );
}

export default App;
