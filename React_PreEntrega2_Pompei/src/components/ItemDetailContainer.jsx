import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsJSON from "../Json/products.json"
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const [products, setProducts]= useState([]);
  const {id} = useParams();

  useEffect(() => {
    const getProducts = async ()=>{
      try {
        const response = await new Promise ((resolve)=>{
          setTimeout(() => {
            resolve (productsJSON.find(products=> products.id === parseInt(id)))
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
    <div>
      <h2>
        <ItemDetail products={products} />
      </h2>
    </div>
  )
}

export default ItemDetailContainer