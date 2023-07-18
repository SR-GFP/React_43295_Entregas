import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ItemCard from "./ItenCard";
import { useState, useEffect } from "react";
import productsJSON from "../Json/products.json"



const ItenListContainer = () => {
  const [products, setProducts]= useState([]);

  useEffect(() => {
    const getProducts = async ()=>{
      const response = await productsJSON;
      console.log(response);
      setProducts(response)
    }
    getProducts();
  }, [])
  
  return (    
    <Container>
      <Row>
      {products.map(p=><ItemCard
        key = {p.id}        
        name = {p.name}
        image = {p.image}
        age = {p.age}
        price = {p.price}
        brand={p.brand}
      />)}                
      </Row>
    </Container>
  )
}

export default ItenListContainer

