import { useEffect } from "react";
import { Carousel, CarouselItem, Image } from "react-bootstrap";
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
        <CarouselItem key={product.id}>
          <Link to={`/product/${product.id}`}>
            <Image src={product.image} alt={product.name} className="mt-5"></Image>
            <Carousel.Caption className="carousel-caption mb-5">
              <h2 >
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
