'use client'
import React from "react";
import DarkMode from "./darkmode";
import { useState } from "react";
import { Saira_Stencil_One } from "next/font/google";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faBarsStaggered)
const saira= Saira_Stencil_One({
  subsets:['latin'],
  weight:['400'],
});
function Navbar() {
  const [open, setOpen] = useState(false);
  
  return (
    
    <div className="w-full h-20 lg:h-28 text-black bg-gray lg:bg-transparent" >
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <main style={saira.style} >
        <h1 className={'text-4xl text-white uppercase ml-8'}>KSHITIJ<span className=" text-green-400 "> .</span></h1></main>
        
        <nav
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            open ? "block" : "hidden"
          }`}
        >
          
        <ul className="text-base text-gray-400 lg:flex lg:justify-between list-none">
          <li className="lg:px-6 py-2 block hover:text-white text-lg ml-9 font-semibold hover:scale-110 ease-in duration-300">Home</li>
          <li className="lg:px-6 py-2 block hover:text-white text-lg font-semibold hover:scale-110 ease-in duration-300">Pages</li>
          <li className="lg:px-6 py-2 block hover:text-white text-lg font-semibold hover:scale-110 ease-in duration-300">Services</li>
          <li className="lg:px-6 py-2 block hover:text-white text-lg font-semibold hover:scale-110 ease-in duration-300">Portfolio</li>
          <li className="lg:px-6 py-2 block hover:text-white text-lg font-semibold hover:scale-110 ease-in duration-300">Blog</li>
         <li> 
    </li>
        </ul>
        </nav>
        
        <div>
       
  </div>
  <div className="mt-2"><DarkMode/></div>
    <div>
      <FontAwesomeIcon width={40} height={40} className="fa-xl mr-6" color="#faf7f0" icon={"bars-staggered"} />
    </div>
      </div>
      
    </div>
  );
};

export default Navbar;
