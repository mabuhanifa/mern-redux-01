import { useEffect } from "react";
import { Button, Card, Col, Container, Image, ListGroup, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { listProductDetails } from "../actions/productActions";
import Message from "../components/Message";
import Rating from "../components/Rating";

const ProductScreen  = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { product, loading, error } = productDetails;
     console.log(product);
    
    useEffect(() => {
       dispatch(listProductDetails(id));
    }
    , [ dispatch ,id]);


    return (
        <Container>
            <Link className="btn btn-light my-3" to="/">Go Back</Link>


            {loading ? (
                <Spinner/>
            ) : error ? (
                <Message variant='danger'>{ error }</Message>
            ) : (
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
            )}

            
        </Container>
    );
};

export default ProductScreen;