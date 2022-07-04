import { useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };
  return (
    <Container>
      <Form onSubmit={submitHandler} className="d-flex">
        <FormControl
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search Products...'
          className="me-2 w-50 "
          aria-label="Search"
        />
        <Button type='submit' variant='outline-success' className='p-2'>Search</Button>
      </Form>
    </Container>
  );
};

export default SearchBox;
