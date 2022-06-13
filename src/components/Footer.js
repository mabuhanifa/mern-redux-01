import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
            <Col className="text-center py-3">
             Copyright &copy; {new Date().getFullYear()} Gadget Square
            </Col>
            
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
