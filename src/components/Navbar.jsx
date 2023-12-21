import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import LightIcon from "../assets/light.svg";
import DarkIcon from "../assets/dark.svg";

export default function Navbar() {
  let [search, setSearch] = useState("");
  let navigate = useNavigate();

  let searchBtn = (e) => {
    e.preventDefault();
    navigate("/?search=" + search);
  };

  let { isDark, changeTheme } = useTheme();


  return (
    <div className={` border-b-2 ${isDark ? 'bg-slate-800 border-b-indigo-500' : ''}`}>
      <nav className=" p-3  max-w-6xl mx-auto ">
        <ul className=" flex justify-between items-center">
          <li className=" flex items-center">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="search here.."
              className=" w-24 outline-none mr-2 border-b p-1"
            />
            <svg
              onClick={searchBtn}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 cursor-pointer ${isDark ? 'text-white' : ""}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </li>
          <Link to={"/"} className=" flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 md:w-10 md:h-10 ${isDark ? 'text-white' : ''}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
              />
            </svg>
            <p className="text-3xl font-bold hidden md:block text-indigo-500">
              BookStore
            </p>
          </Link>
          <li className=" flex items-center gap-2">
            <Link
              to={"/create"}
              className=" flex bg-indigo-500 text-white p-2 px-3 rounded-xl"
            >
              <p>Create</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
            <div className="">
              {isDark && (
                <img
                  src={LightIcon}
                  alt=""
                  className=" w-9"
                  onClick={() => changeTheme("light")}
                />
              )}

              {!isDark && (
                <img
                  src={DarkIcon}
                  alt=""
                  className=" w-9"
                  onClick={() => changeTheme("dark")}
                />
              )}
            </div>
            <div className=" border-2 border-indigo-500 rounded-full">
              <img
                src="https://i.pinimg.com/736x/94/fa/cc/94faccecb8c7e079a5f565aaa589ae17.jpg"
                className=" w-12 h-12 rounded-full"
                alt=""
              />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
