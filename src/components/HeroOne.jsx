import React from 'react'
import imgOne from './images/pexels-kampus-8380030.jpg'
import imgTwo from './images/pexels-chandrianggara-18477163.jpg'
import imgThree from "./images/pexels-yash-dave-539971998-19790464.jpg";
import { useGSAP } from '@gsap/react';
import gsap, {Power3} from 'gsap';
gsap.registerPlugin(useGSAP);




const HeroOne = () => {
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.to("#container", {css: {visibility: 'visible'}, delay: 1, duration: 0.5})
        // .from("#image", {y: 900, opacity: 0, stagger: 0.1, duration: 1, delay: 0.5, ease: Power3.easeOut})
        // .to("#image", {scale: 1.03})

        tl.from('#imageOneContainer', 2, {y: 1200, ease: Power3.easeOut})
        .from("#imageOne", 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    }, []);
  return (
    <div id='container' className='flex invisible w-full h-full items-center justify-between px-[40px]'>
      <div className='w-[50%]'>
        <h1 className='font-bold text-4xl'>Relieving the burden of disease caused by behaviours.</h1>
        <p className='text-gray-500 pt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, 
            quam sit asperiores assumenda beatae ullam quaerat excepturi, 
            commodi impedit nam dolor, illo soluta culpa deserunt? Atque 
            quod optio dolorum ipsa.
        </p>

        <div className='flex space-x-1 mt-3 items-center'>
            <div className='w-[40px] mt-1 h-[1px] bg-slate-400'></div>
            <p className='font-bold'>Explore</p>
            <button className='bg-blue-600 p-1 font-bold text-2xl text-center text-white rounded-full'>{`=>`}</button>
        </div>
      </div>

      <div className='w-[50%] flex gap-4'>
        <div className='space-y-5'>
            <div id='imageOneContainer'>
            <img id='imageOne' className='w-[280px] mt-[-250px] h-[300px] overflow-hidden' src={imgOne} alt="" />
            </div>
            <img id='image' className='w-[280px] h-[350px] overflow-hidden' src={imgThree} alt="" />
        </div>
        <img id='image' className='w-[280px] h-[350px] mt-[-100px] overflow-hidden' src={imgTwo} alt="" />
      </div>
    </div>
  )
}

export default HeroOne
