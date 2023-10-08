'use client'
import Navbar from "./components/navbar";
import Link from "next/link";
import "../app/cursor.css"
import { useEffect } from "react";
function LandingPage () {
  useEffect(() => {
    var cursor = document.querySelector( "#cursor" );
            var cursor2 = document.querySelector( "#cursor2" );

            document.addEventListener( "mousemove", function ( e )
            {
                cursor.style.cssText = cursor2.style.cssText = "left:" + e.clientX + "px;" + "top:" + e.clientY + "px;";
            } )
  }, [])
  return (
    <div id="text">
      
      <div id="cursor"></div>
      <div id="cursor2"></div>

      <Navbar/>
      
    </div>
  );
};

export default LandingPage;