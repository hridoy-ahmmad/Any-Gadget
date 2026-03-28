
import { useState } from 'react'
import './App.css'
import Accesories from './Components/Accesories/Accesories'
import Header from './Components/Nav/Header'


const fetchPromise = async () => {
  const res = await fetch('/accesories.json')
  return res.json()
}

const dataPromise = fetchPromise()

function App() {
  const [cart, setCart] = useState([])

  // const handleRemove = (item) => {
  //   const filtered = cart.filter(i => i.id !== item.id)
  //   setCart(filtered)

  // }

  return (
    <div>
      <Header  cart={cart} setCart={setCart}></Header>
      <Accesories dataPromise={dataPromise} cart={cart} setCart={setCart}></Accesories>
    </div>
  )
}

export default App
