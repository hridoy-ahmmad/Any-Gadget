
import { useState } from 'react'
import './App.css'
import Accesories from './Components/Accesories/Accesories'
import Header from './Components/Nav/Header'
import { Bounce, toast } from 'react-toastify'



const fetchPromise = async () => {
  const res = await fetch('/accesories.json')
  return res.json()
}

const dataPromise = fetchPromise()

function App() {
  const [cart, setCart] = useState([])

  const handleRemove = (item) => {
    const filtered = cart.filter(i => i.id !== item.id)
    setCart(filtered)
    toast.success(`${item.name} successfuly Removed from the cart`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  }

  return (
    <div>
      <Header handleRemove={handleRemove} cart={cart} setCart={setCart}></Header>
      <Accesories dataPromise={dataPromise} handleRemove={handleRemove} cart={cart} setCart={setCart}></Accesories>
    </div>
  )
}

export default App
