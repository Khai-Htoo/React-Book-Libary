
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { ThemeContextProvider } from './context/useContext'


ReactDOM.createRoot(document.getElementById('root')).render(
   <ThemeContextProvider>
         <RouterProvider router={router} />
   </ThemeContextProvider>
)
