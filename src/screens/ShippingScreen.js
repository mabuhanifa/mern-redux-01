import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../actions/cartActions";
import FormContainer from "../components/FormContainer";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({address, city, postalCode, country}));
    navigate("/payment");
  };
  return (
    <Container>
      <FormContainer>
        <h1>Shipping </h1>
      </FormContainer>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            className="border border-secondary"
            type="text"
            placeholder="Enter address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            className="border border-secondary"
            type="text"
            placeholder="Enter city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            className="border border-secondary"
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            className="border border-secondary"
            type="text"
            placeholder="Enter Country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" className="my-2 " variant="primary">
          Continue
        </Button>
      </Form>
    </Container>
  );
};

export default ShippingScreen;
