import React from 'react'
import NavBar from '../Components/NavBar'
import ItemListContainer from '../Components/ItenListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetail from '../Components/ItemDetail'

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path={"/"} element= { ItemListContainer } />
        <Route exact path={"/category/:ID"} element={ ItemListContainer } />
        <Route exact path={"/Item/:ID"} element={ ItemDetail } />
        <Route exact path={""} />

      </Routes>
    </BrowserRouter>
  )
}

export default Router
