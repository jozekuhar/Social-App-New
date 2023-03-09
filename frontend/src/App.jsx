import React from "react"
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import { Login, Register } from "./pages"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
