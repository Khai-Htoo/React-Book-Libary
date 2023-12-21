import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import './layout.css'
import useTheme from "../hooks/useTheme";
export default function Layout() {
    let location = useLocation();
    let {isDark} = useTheme()
  return (
    <div className="">
      <Navbar />
     <div className={` h-screen ${isDark ? 'bg-slate-900' : ''}`}>
     <div className="max-w-6xl mx-auto p-3">
        <SwitchTransition >
          <CSSTransition classNames="fade" timeout={200} key={location.pathname}>
            <Outlet />
          </CSSTransition>
        </SwitchTransition>
      </div>
     </div>
    </div>
  );
}
