import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import { CartProvider } from './context/CartContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <CartProvider>
      <div>
        {currentPage === 'home' ? (
          <Home setCurrentPage={setCurrentPage} />
        ) : (
          <Cart setCurrentPage={setCurrentPage} />
        )}
      </div>
    </CartProvider>
  )
}

export default App
