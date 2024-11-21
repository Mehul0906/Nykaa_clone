import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Description from './Description'
import { Navbar, Pagination } from 'react-bootstrap'
import Signinpage from './Signinpage'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Product' element={<Product/>}></Route>
        <Route path='/Description/:id' element={<Description/>}></Route>
        <Route path='/Signinpage' element={<Signinpage/>}></Route>
        {/* <Route path='/Pagination' element={<Pagination/>}></Route> */}
      </Routes>
    </div>
  )
}

export default AllRoutes
