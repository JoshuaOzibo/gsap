import React, {useState} from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Navbar = ({showNav}) => {

    useGSAP(() => {
        let tl = gsap.timeline();
        tl.from("#navText", {
            opacity: 0,
            duration: 0.5,
            delay: 2.7
        });

        tl.from("#westText", {
            opacity: 0,
            delay: -0.1,
            ease: "power2.out",
            duration: 0.4,
            scale: 0.9,
            y: 50,
        });
        

    }, []);

    console.log(showNav)
  return (
    <nav id='nav' className='w-full bg-red-400 z-30 overflow-hidden fixed h-[60px] flex bg-inherit justify-center'>
        <div className=' flex text-white justify-between items-center w-[90%]'>
        <ul id='navText' className='flex text-xs font-medium space-x-3 justify-center items-center'>
            <li>Design</li>
            <li>Menu</li>
            <li>Residences</li>
            <li>Penthouses</li>
            <li>Amenities</li>
        </ul>

        <h2 id='westText' className='font-sm text-white tracking-tighter text-2xl'>53 West 53</h2>

        <ul id='navText' className='flex text-xs  font-medium space-x-3 items-center'>
            <li>Neighborhood</li>
            <li>Gallery</li>
            <li>Availability</li>
            <li>Inquire</li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar
