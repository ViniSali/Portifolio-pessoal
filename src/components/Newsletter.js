import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import CV from "../CV - Jean Vinicius Saliamis.pdf";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email
      })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        
          <div className="new-email-bx">
          <h3>Se interessou pelo meu perfil? Tem uma oportunidade na sua empresa ou projeto? Vamos conversar!</h3>       
              <a href={CV} target="_blank">Baixar CV</a>                   
        </div>
        
      </div>
    </Col>
  )
}
