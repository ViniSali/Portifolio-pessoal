import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  /*
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };
  */

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Entre em contato</h2>
                <div className="social-icon">                
                <a href="https://www.linkedin.com/in/viniciussaliamis/" target="_blank" title="LinkedIn"><img src={navIcon1} alt="LinkedIn" /></a>/viniciussaliamis
                <br></br>
                <a href="https://github.com/ViniSali" target="_blank" title="GitHub"><img src={navIcon2} alt="GitHub"/></a>/ViniSali
                <br></br>
                <a href="https://www.instagram.com/viniciussali/" target="_blank" title="Instagram"><img src={navIcon3} alt="Instagram" /></a>/viniciussali
                <br></br>
                <a href="mailto:vinisali@hotmail.com" target="_blank" title="E-mail"><img src={navIcon4} alt="E-mail" /></a>vinisali@hotmail.com
                <br></br>
                <a href="https://wa.me/5521999258326" target="_blank" title="Telephone"><img src={navIcon5} alt="Telephone" /></a>+55 21 999258326                              
              </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
