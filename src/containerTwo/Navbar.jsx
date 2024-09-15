import React, {useState, useEffect} from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = ({showNav}) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check scroll position immediately

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useGSAP(() => {
        let tl = gsap.timeline();
        
        // Adjust the animation for smoother transitions
        tl.from("#navText", {
            opacity: 0,
            y: -50, // Start from above
            duration: 0.8,
            ease: "power3.out", // Smoother easing
            delay: 2.7
        });

        tl.from("#westText", {
            opacity: 0,
            y: 50, // Start from below
            scale: 0.9,
            duration: 0.8,
            ease: "power3.out", // Smoother easing
            delay: -0.4 // Slight overlap with previous animation
        });

    }, []);

    console.log(showNav)

    return (
        <nav id='nav' className={`w-full z-30 top-0 h-[60px] flex justify-center transition-all duration-500 ease-in-out fixed
            ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
            <div className='flex justify-between items-center w-[90%]'>
            <ul id='navText' className='flex text-xs font-medium space-x-3 justify-center items-center'>
                <li>Design</li>
                <li>Menu</li>
                <li>Residences</li>
                <li>Penthouses</li>
                <li>Amenities</li>
            </ul>

            <h2 id='westText' className='font-sm tracking-tighter text-2xl'>53 West 53</h2>

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










