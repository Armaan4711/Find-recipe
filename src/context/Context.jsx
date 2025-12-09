import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Globalcontext = createContext(null);

export default function Globalstate({ children }) {
    const [searchparam, setsearchparam] = useState("")
    const [loading, setloading] = useState(false)
    const [recipelist, setreciplist] = useState([])
    const [recipedetaildata, setrecipedetaildata] = useState(null)
    const [favoritelist, setfavoritelist] = useState([])
    const navigate=useNavigate()
    async function handlesubmit(e) {
        e.preventDefault()
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchparam}`)
            setloading(true)
            const data = await res.json()
           

                if (data?.data?.recipes) {
                    setreciplist(data?.data?.recipes)
                    setloading(false)
                    setsearchparam("")
                    navigate('/')
                }
           
            console.log(data)
        } catch (error) {
            console.log(error)
            setloading(false)
        }
        

    }
     function handleaddtofavorite(getcurrentitem){
                let cpyfavouritelist =[...favoritelist]
                const index=cpyfavouritelist.findIndex(item=>item.id===getcurrentitem.id)
                if (index===-1) {
                    cpyfavouritelist.push(getcurrentitem)
                }else{
                    cpyfavouritelist.splice(index)
                }
                setfavoritelist(cpyfavouritelist)
            }
    return <Globalcontext.Provider value={{ searchparam, loading, recipelist,setsearchparam, handlesubmit, recipedetaildata, setrecipedetaildata,handleaddtofavorite,favoritelist }}
    >{children}
    </Globalcontext.Provider>
}