
import './App.css'
import Header from "./components/Header"
import { Outlet } from "react-router-dom"


function App() {

  return (
    <>
    <div className="container">
      <Header />
      <Outlet />

      {/* <h1 className="heading-text">Online Book Managment Application</h1> */}
      </div>
    </>
  )
}

export default App
