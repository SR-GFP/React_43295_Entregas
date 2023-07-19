import './App.css';
import NavBar from "./components/NavBar";
import ItenListContainer from './components/ItenListContainer';
import Error from "./components/Error";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={"/"} element={ <ItenListContainer/> } />
          <Route path={"/category/:id"} element={ <ItenListContainer/> } />
          <Route path={"/item/:id"} element={ <ItemDetailContainer/> } />
          <Route path={"*"} element={ <Error/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
