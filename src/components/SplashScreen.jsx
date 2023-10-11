import React, { useEffect, useState } from 'react'
import anime from "animejs"
import Image from 'next/image'
// import { setTimeout } from 'timers/promises'
const SplashScreen = ({finishLoading}) => {
    const [isMounted, setIsMounted]= useState(false)
    const animate=()=>{
        const loader= anime.timeline({
            complete:()=>finishLoading(),
        })
        loader.add({
          targets:"#logo",
          delay:0,
          scale:1,
          duration:500,
          easing: "easeInOutExpo",
        })
    }
    useEffect(()=>{
      const timeout=setTimeout(()=>setIsMounted(true), 10)
      animate()
      return()=>clearTimeout(timeout)    
    },[])

  return (
    <div className='flex h-screen justify-center items-center' isMounted={isMounted}>
      <Image id='logo' src="/KSHITIJ.gif" width={600} height={600} />
    </div>
  )
}

export default SplashScreen