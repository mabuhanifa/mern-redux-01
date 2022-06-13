import { Col, Container, Row } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

const HomeScreen = () => {
  return <Container>
  <h1 className="mt-3">Latest Products</h1>
  <Row>
    {
        products.map(product => (<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
        </Col>
        )
        )
    }
  </Row>

  </Container>;
};

export default HomeScreen;
