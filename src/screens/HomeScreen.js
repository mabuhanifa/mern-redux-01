import { useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import Product from "../components/Product";

const HomeScreen = () => {
  const { pageNumber } = useParams() || 1;
  const { keyword } = useParams();
  console.log(pageNumber, keyword);
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products, loading, error, page, pages } = productList;
  console.log(products);

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);
  return (
    <Container>
      <h1 className="mt-3">Latest Products</h1>

      {loading ? (
        <Spinner />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.products?.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </Container>
  );
};

export default HomeScreen;
