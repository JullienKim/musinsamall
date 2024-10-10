import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    // console.log(searchQuery);
    const url = `http://localhost:3000/products?q=${serchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      <Row>
        {productList.map((menu, index) => (
          <Col lg={3}>
            <ProductCard item={menu} />
          </Col>
          // <Col lg={3}>
          //   <ProductCard />
          // </Col>
          // <Col lg={3}>
          //   <ProductCard />
          // </Col>
          // <Col lg={3}>
          //   <ProductCard />
          // </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
