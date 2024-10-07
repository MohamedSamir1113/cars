//import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/MainLayout/MainLayout'
import Home from './components/Home/Home'
import CarDetails from './components/CarDetails/CarDetails'
import AllCars from './components/AllCars/AllCars'


function App() {
  let router = createBrowserRouter([
    {
      path: "/", element: <MainLayout />,
      children: [
        {index: true,element:<Home/>},
        {path:"all-vehicles/car/:id",element:<CarDetails/>},
        {path:"all-vehicles",element:<AllCars/>}
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
