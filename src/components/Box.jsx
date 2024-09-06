import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Box = () => {
    
    useGSAP(() => {
        // chaining multiple items
    const boxes = gsap.utils.toArray("#box");
    boxes.forEach((box) => {
        ScrollTrigger.create({
            trigger: box,
            start: "top top",
            end: "",
            pin: true,
            pinSpacing: true
        })

    })
    // chaining a single item;
    
        // ScrollTrigger.create({
        //     trigger: '.yellow',
        //     start: "top top",
        //     end: "",
        //     pin: true,
        //     pinSpacing: true
        // })

    }, []);
  return (
    <div className='w-full h-[100vh]'>
      <div id='box' className='red w-full h-[800px] bg-red-500 border-2'>Box 1</div>
      <div id='box' className='yellow w-full h-[800px] bg-yellow-500 border-2'>Box 2</div>
      <div id='box' className='blue w-full h-[800px] bg-blue-500 border-2'>Box 3</div>
      <div id='box' className='pink w-full h-[800px] bg-pink-500 border-2'>Box 4</div>
      <div id='box' className='purple w-full h-[800px] bg-purple-500 border-2'>Box 5</div>
    </div>
  )
}

export default Box
