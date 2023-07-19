import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ItemList from "./ItenList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsJSON from "../Json/products.json"



const ItenListContainer = () => {
  const [products, setProducts]= useState([]);
  const {id} = useParams();
  useEffect(() => {
    const getProducts = async ()=>{
      try {
        const response = await productsJSON;
        console.log(response);
        setProducts(response)        
      } catch (error) {
        return console.log(error);
      }
    }
    getProducts();
  }, [])
  
  return (    
    <Container>
      <Row>
      {products.map(p=><ItemList
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

