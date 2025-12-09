import React, { useContext } from 'react'
import Recipeitem from '../recipe-list/Recipeitem'
import { Globalcontext } from '../../context/Context'

function Favorites() {
  const {favoritelist}=useContext(Globalcontext)

  
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        favoritelist && favoritelist.length>0 ?
          favoritelist.map(item=> <Recipeitem item={item}/>)
        :<div>
          <p className='lg:text-4xl text-xl text-center font-extrabold text-black'>Noting to show. Please Add something.</p>
        </div>
      }
    </div>
  )
}

export default Favorites