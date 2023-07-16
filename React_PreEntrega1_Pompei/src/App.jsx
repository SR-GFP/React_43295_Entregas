import './App.css';
import NavBar from "./componentes/Navbar/NavBar";
import ItemListContainer from "./componentes/Item-List-Container/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>      
        <NavBar />
        <Routes>
          <Route path='/' element={<home/>}/>
          <Route path='/' element={<home/>}/>
          <Route path='/' element={<home/>}/>
          <Route path='/' element={<home/>}/>
        </Routes>              
        <ItemListContainer 
        greeting={"¡Bienvenidos a \"El Club del Whisky\"!"} />
      </BrowserRouter>      
        
      
    </div>
  );
}

export default App;
