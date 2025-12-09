import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Globalcontext } from '../../context/Context'

function Navbar() {
  const {searchparam,setsearchparam,handlesubmit}=useContext(Globalcontext)
console.log(searchparam)

  return (
  <nav className='flex justify-between py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 '>
    <h2 className='text-2xl font-semibold'> <NavLink to={'/'} className='text-black hover:text-gray-700 duration-300'>FoodRecipe</NavLink></h2>
    <form onSubmit={handlesubmit} >
    <input 
    type="text"
    value={searchparam}
    onChange={(e)=>setsearchparam(e.target.value)}
    name='search'
    placeholder='Enter Items...'
    className='bg-white/73 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200  '
    />
    </form>
    <ul className='flex gap-5'>
      <li>
        <NavLink to={'/'} className='text-black hover:text-gray-700 duration-300'>Home</NavLink>
      </li>
       <li>
        <NavLink to={'/favorites'} className='text-black hover:text-gray-700 duration-300'>Favourites</NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar