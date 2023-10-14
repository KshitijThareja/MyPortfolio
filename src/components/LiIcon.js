import React from 'react'
import { useScroll,motion } from "framer-motion";
import { useTheme } from '../context/ThemeContext';
const LiIcon = ({reference}) => {
    const {isDarkmode}=useTheme()
    const {scrollYProgress}= useScroll(
        {
          target:reference,
          offset:["center end", "center center"]
        }
      )
  return (
    <figure className={isDarkmode?'absolute left-0 stroke-white':'absolute left-0 stroke-black'}>
        <svg className='-rotate-90' width="75" height="75" viewBox='0 0 100 100'>
            <circle cx="75" cy="50" r="20" className='stroke-gradient stroke-1 fill-none' />
            <motion.circle cx="75" cy="50" r="20" className={isDarkmode?'stroke-[5px] fill-black':'stroke-[5px] fill-white'}
            style={{
                pathLength:scrollYProgress,
            }}
            />
            <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-gradient'/>
        </svg>
    </figure>
  )
}

export default LiIcon