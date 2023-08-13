import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Container } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const getProductDetails = async (productId) => {
    setLoading(true);
    try {
      const querydb = getFirestore();
      const queryDoc = doc(querydb, "Products", productId);
      const response = await getDoc(queryDoc);
      if (response.exists()) {
        setProducts({ id: response.id, ...response.data() });
      } else {
        setError("El producto no fue encontrado.");
      }
    } catch (error) {
      setError(
        `Hubo un error al cargar los detalles del producto, intentalo nuevamente mas tarde. Error: ${error}`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return (
    <Container>
      {loading ? (
        <ClipLoader />
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <ItemDetail products={products} />
      )}
    </Container>
  );
};

export default ItemDetailContainer;
