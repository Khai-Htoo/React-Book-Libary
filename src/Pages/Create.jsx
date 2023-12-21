import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import useTheme from "../hooks/useTheme";

export default function Create() {
  let [title ,setTitle] = useState('')
  let [description,setDescription] = useState('')
  let [newCategory,setNewCategory] = useState('')
  let [categories,setCategory] = useState([])

  let navigate = useNavigate()
  let {isDark} = useTheme()
  let addCategory = (e) => {
    e.preventDefault();
    if(newCategory && categories.includes(newCategory)){
      setNewCategory('')
      return;
    }
    setCategory([newCategory,...categories])
    setNewCategory('')
  }
  let {setPostData,data : book} = useFetch('http://localhost:3000/book',"POST")

  let addBook = (e) => {
    e.preventDefault()
    let data = {
        title,description,categories
    }
    setPostData(data)
    // navigate('/')
  }

  useEffect(()=>{
   if(book.length!= 0)
      navigate('/')
  },[book])

  return (
    <div>
      <form className="w-full max-w-lg h-full mx-auto mt-10" onSubmit={addBook}>
        <div className={`flex flex-wrap -mx-3 mb-6 ${isDark ? 'text-white' : ''}`}>
          <div className="w-full px-3">
            <label className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${isDark ? 'text-white' : ''}`}>
              Title
            </label>
            <input
            value={title}
              onChange={e=>setTitle(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
            />
          </div>

          <div className="w-full px-3">
            <label className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${isDark ? 'text-white' : ''}`}>
              Description
            </label>
            <input
            value={description}
            onChange={e=>setDescription(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
            />
          </div>
          <label className={`block uppercase px-3 tracking-wide text-gray-700 text-xs font-bold mb-2 ${isDark ? 'text-white' : ''}`}>
            Categories
          </label>
          <div className="w-full flex items-center px-3">
            <input
              value={newCategory}
              onChange={e=>setNewCategory(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
            />
            <svg
            onClick={addCategory}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 ml-3 h-9 rounded-md text-white mb-3 p-1  bg-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className=" flex gap-2 mx-3">
          {  categories.map(c=>
             <p className=" p-1 px-2 bg-slate-300 rounded-full" key={c}> {c}</p>
          )}
          </div>
          <div className="w-full px-3">
                 <button className=" w-full py-2 mt-3 text-white rounded-lg bg-indigo-500">Create Book</button>
          </div>
     
        </div>
      </form>
    </div>
  );
}
