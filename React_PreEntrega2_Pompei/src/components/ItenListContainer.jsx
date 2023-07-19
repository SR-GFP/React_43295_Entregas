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
        const response = await new Promise ((resolve)=>{
          setTimeout(() => {
            resolve (id ? productsJSON.filter(products=> products.region === id):productsJSON)
          }, 2000);
        });        
        setProducts(response)        
      } catch (error) {
        return console.log(error);
      }
    }
    getProducts();
  }, [id])
  
  return (    
    <Container>
      <Row>     
        <ItemList products={products}/>               
      </Row>
    </Container>
  )
}

export default ItenListContainer

