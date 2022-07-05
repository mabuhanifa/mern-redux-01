import { useEffect } from "react";
import { Carousel, CarouselItem, Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listTopProducts } from "../actions/productActions";
import Loader from "./Loader";
import Message from "./Message";

const ProductCarousel = () => {
  const dispatch = useDispatch();
  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;
  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-dark mt-3">
      {products.map((product) => (
        <CarouselItem className="mb-5" key={product.id}>
          <Link to={`/product/${product._id}`}>
            <Row className="mt-5">
              <Col>
              <Image
              src={product.image}
              alt={product.name}
              className="mt-5"
            ></Image>
              </Col>
            </Row>
            <Carousel.Caption className="carousel-caption mb-5">
              <h3>
                {product.name} (${product.price})
              </h3>
            </Carousel.Caption>
          </Link>
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
