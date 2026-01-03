import React from 'react'
import { GiIntricateNecklace } from "react-icons/gi"
import { IoIosSearch } from "react-icons/io"
import { RiShoppingBag4Line } from "react-icons/ri"
import { useCart } from '../context/CartContext'

function Nav({ searchQuery, setSearchQuery, setCurrentPage }) {
  const { getTotalItems } = useCart();

  return (
    <div className='w-full h-[100px] bg-slate-800 flex justify-between items-center px-8'>
      
      <button 
        onClick={() => setCurrentPage('home')}
        className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl cursor-pointer hover:bg-gray-100 transition-colors'
      >
        <GiIntricateNecklace className='w-[30px] h-[30px] text-[#FFD700]'/>
      </button>

      <form className="flex items-center gap-9 bg-white px-6 py-2 rounded-md w-[350px] sm:w-[450px] md:w-[650px]">
        <IoIosSearch size={20} className="text-slate-500" />
        <input
          type="text"
          placeholder="Search Item..."
          className="outline-none flex-1"
          value={searchQuery || ''}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      <button
        onClick={() => setCurrentPage('cart')}
        className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded shadow-xl relative cursor-pointer hover:bg-gray-100 transition-colors'
      >
        <span className='absolute top-0 right-2 text-[#FF00FF] font-bold text-[18px]'>
          {getTotalItems()}
        </span>
        <RiShoppingBag4Line className='w-[30px] h-[30px] text-[#FF00FF]'/>
      </button>

    </div>
  )
}

export default Nav
