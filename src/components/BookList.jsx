
import useFetch from "../hooks/useFetch";
import { Link, useLocation } from "react-router-dom";
import useTheme from "../hooks/useTheme";

export default function BookList() {
  
  let location = useLocation();
  let params = new URLSearchParams(location.search)
  let search = params.get('search')
  let {isDark} = useTheme()

   let {data,loading} =   useFetch(`http://localhost:3000/book${search ? `?q=${search}` : ''  }`)
  return (
    <div>
        {loading && <p>Loading....</p>}
      <div className=" grid md:grid-cols-4 grid-cols-2 gap-3 ">
        {data.length === 0 && <h1>There is no data</h1>}
        {data && data.map((p) => (
          <Link to={'detail/'+p.id} className={`shadow-xl  border ${isDark ? 'border-indigo-500' : ''}`} key={p.id}>
            <div className={`p-3 space-y-2 ${isDark ? 'text-indigo-500' : ''}`}>
              <img
                src="https://m.media-amazon.com/images/I/81tWeyI46qL._AC_UF1000,1000_QL80_.jpg"
                alt=""
              />
              <p>{p.title}</p>
              <p>{p.description}</p>
              <div className=" flex gap-1 flex-wrap">
                {p.categories.map((b) => (
                  <p className=" bg-slate-300 p-1 px-2 rounded-full" key={b}>{b}</p>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
