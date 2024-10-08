import React from 'react'
import { motion } from 'framer-motion'
const quote={
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        y:0, 
        transition:{
            delay:1.5,
            staggerChildren:0.08,
        }
    }
}
const singleWord={
    initial:{
        opacity:0,
        y:50,
    },
    animate:{
        opacity:1,
        transition:{
            duration:2,
        }
    }
}
const AnimatedText = ({text, className=""}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center '>
       <motion.h1 className={`w-full inline-block ${
            className
          }`}
          variants={quote} initial="initial" animate="animate"
          >
            {
                text.split(" ").map((word, index)=>
                <motion.span key={word+'-'+index} className='inline-block' variants={singleWord} >
                    {word}&nbsp;
                </motion.span>
            )}
        </motion.h1>
    </div>
  ) 
}

export default AnimatedText