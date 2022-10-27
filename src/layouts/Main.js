import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';


export const ToggleMode = createContext();
const Main = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <ToggleMode.Provider value={{toggle, setToggle}}>
          <div className={toggle ?`bg-gray-300 text-white`: null}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
          </div>
        </ToggleMode.Provider>
    );
};

export default Main;