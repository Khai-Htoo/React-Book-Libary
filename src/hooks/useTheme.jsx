import { useContext } from "react";
import { ThemeContext } from "../context/useContext";
export default function useTheme() {
   let context = useContext(ThemeContext)
   if(!context){
    new Error('theme context should be in barnyar')
   }
   return context
}


