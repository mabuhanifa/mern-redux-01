import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";

const ProductScreen  = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
            setProduct(data);
        }
        fetchProduct();
    }
    , [id]);


    return (
        <Container>
            <Link className="btn btn-light my-3" to="/">Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>
                            {product.name}
                            </h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews} reviews`}  
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>
                                $ {product.price}
                            </h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>
                                {product.description}
                            </p>
                        </ListGroup.Item>
                        

                         </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                            <Row>
                                <Col>
                                Price:
                                </Col>
                                <Col>
                                <strong>{product.price }</strong>
                                </Col>
                            </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <Row>
                                <Col>
                                Status:
                                </Col>
                                <Col>
                                {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                                </Col>
                            </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row >
                                    <Col >
                                    <Button className="btn btn-block w-100" type='button' disabled={product.countInStock === 0 }> Add To Cart</Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                
            </Row>
        </Container>
    );
};

export default ProductScreen;