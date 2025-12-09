import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Globalcontext } from '../../context/Context'


function Details() {
  const { id } = useParams()
  const { recipedetaildata, setrecipedetaildata,handleaddtofavorite ,favoritelist} = useContext(Globalcontext)

  useEffect(() => {
    async function getrecipe() {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      const data = await response.json()
      console.log(data)
      if (data?.data) {
        setrecipedetaildata(data?.data)
      }
    }
    getrecipe()

  }, [id])

  return (
    <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'><div className='row-start-2 lg:row-start-auto'>
      <div className='h-96 overflow-hidden rounded-xl  group'>
        <img src={recipedetaildata?.recipe?.image_url}
          className='h-full w-full  block group-hover:scale-105 duration-300 '
        />
      </div>
    </div>
      <div  >
        <span className='text-sm text-cyan-700 font-medium'>{recipedetaildata?.recipe?.publisher}</span>
        <h3 className='font-bold text-2xl truncate'>{recipedetaildata?.recipe?.title}</h3>
        <div >
          <button className='p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white' 
          onClick={()=>handleaddtofavorite(recipedetaildata?.recipe)}>

            {
            favoritelist && favoritelist.length>0 && favoritelist.findIndex(item=>item.id === recipedetaildata?.recipe?.id) !== -1 ? 'Remove from favorite': 'Add to favorite'

            }
          </button> 
        </div>
        <div>
          <span className='text-2xl font-semibold text-black'> Ingrediants:</span>
          <ul className='flex flex-col gap-3 max-h-[300px] overflow-y-auto pr-2'>
              {
                recipedetaildata?.recipe?.ingredients.map(ingrediants=>
                  <li cl>
                    <span className='text-2xl font-semibold text-black'>{ingrediants.quantity} {ingrediants.unit} </span>
                    <span className='text-2xl font-semibold text-black'>{ingrediants.description}</span>
                  </li>
                )
              }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Details