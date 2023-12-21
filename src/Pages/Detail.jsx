
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import useTheme from "../hooks/useTheme"

export default function Detail() {
    let params = useParams()

    let {isDark}= useTheme()

    let {data,loading} = useFetch(' http://localhost:3000/book/' + params.id)
  return (
   <>
   {loading && <p>Loading.....</p>}
   <div className ={` mt-5 flex gap-12 ${isDark ? 'text-white' : ''}`}>
    <img className=" w-[30%] shadow-xl space-y-3" src="https://m.media-amazon.com/images/I/81tWeyI46qL._AC_UF1000,1000_QL80_.jpg" alt="" />
    {data &&  
       <div className=" space-y-3">
         <h1 className=" md:text-4xl font-semibold">{data.title}</h1>
        <p className=" md:text-2xl font-semibold">{data.description}</p>
        <div className="flex gap-3">
            {data.categories && data.categories.map(c=> <p className=" rounded-full bg-slate-300 p-1 px-3 " key={c}>{c}</p>)}
        </div>
       </div>
    }
   </div>
   </> 
  )
}
