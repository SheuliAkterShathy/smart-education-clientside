import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';


 export const ToggleMode = createContext();
const Main = () => {
     const [toggle, setToggle] = useState(false)
    console.log(toggle,'false')
    return (
        <div>
         <ToggleMode.Provider value={{toggle, setToggle}}>
          <div className={toggle ?`bg-violet-300`: `bg-violet-400`}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
          </div>
        </ToggleMode.Provider>
        </div>
    );
};

export default Main;