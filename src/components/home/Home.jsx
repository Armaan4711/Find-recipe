import React, { useContext } from 'react'
import { Globalcontext } from '../../context/Context'
import Recipeitem from '../recipe-list/Recipeitem'

function Home() {
  const {recipelist,loading}=useContext(Globalcontext)
  if(loading) return <div>Loading....Please wait!!</div>
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        recipelist && recipelist.length>0 ?
          recipelist.map(item=> <Recipeitem item={item}/>)
        :<div>
          <p className='lg:text-4xl text-xl text-center font-extrabold text-black'>Noting to show. Please search something.</p>
        </div>
      }
    </div>
  )
}

export default Home