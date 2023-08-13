import ItemList from "./ItemList";
import "../Styles/ItemListContainer.css";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { ClipLoader } from "react-spinners";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const getProducts = async (region) => {
    setLoading(true);
    try {
      const querydb = getFirestore();
      const queryColection = region
        ? query(collection(querydb, "Products"), where("region", "==", region))
        : collection(querydb, "Products");
      const response = await getDocs(queryColection);
      const data = response.docs.map((p) => ({ id: p.id, ...p.data() }));
      setProducts(data);
    } catch (error) {
      setError(
        `Hubo un error al cargar los productos, intentalo nuevamente mas tarde. Error:${error}`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts(id);
  }, [id]);

  return (
    <Container>
      {loading ? (
        <ClipLoader />
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <ItemList products={products} />
      )}
    </Container>
  );
};

export default ItemListContainer;
