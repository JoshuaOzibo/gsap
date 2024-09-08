import React, {useState} from "react";
import introVid from './assets/introVideo.mp4'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const [showNav, setShowNav] = useState(false)

    useGSAP(() => {
        let tl = gsap.timeline();
        tl.from("#HeroContainer", {
            opacity: 0,
            duration: 2
        })
        
        tl.from("#WelcomeMessage", {
            y: 50,
            duration: 0.8,
            delay: -0.8,
            ease: 'expo.out',
            stagger: 1,
            ease: "power1.out"
        })
        tl.from("#Welcomecontainer", {
            overflowY: 'hidden'
        })
        tl.to("#WelcomeMessage", {
            y: "-=100vh",
            duration: 1.8,
            delay: 0.2,
            scale: -0.3,
            x: 65,
            onUpdate: () => {
              // Get the current Y position
              const currentY = gsap.getProperty("#WelcomeMessage", "y");
      
              // Check if Y position is less than or equal to -50 and make the element invisible
              if (parseFloat(currentY) <= -39) {
                gsap.set("#WelcomeMessage", { visibility: "hidden" });
              }
            }
        });

        tl.from("#modernAnimi", {
          overflowY: 'hidden',
        })
        tl.from("#modernAnimiText", {
          y: 103,
          delay: -2,
          stagger: {
            each: 0.1
          }
        })

        tl.to("#nav", {
          scrollTrigger: {
            duration: 1,
            opacity: 0,
            scrub: true
          },
          css: {visibility: "visible", background: "c4c4c4"},
          y: -100,
          onStart: () => setShowNav(true),
      })

        tl.from("#hideNav", {
          scrollTrigger: {
            trigger: "#hideNav",
            duration: 1,
            opacity: 0,
            scrub: true
          },
          onStart: () => setShowNav(true)
      })

    }, [])
  return (
    <div id="HeroContainer" className="w-full h-screen relative">
        {/* {showNav && <div id="nav" className="z-20 invisible">
        <Navbar />
        </div>} */}
        {<div id="hideNav" className="z-20">
        <Navbar showNav={showNav} />
        </div>}
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="path/to/your-fallback-image.jpg"
      >
        <source
          src={introVid}
          type="video/webm"
        />
      </video>
      <div id="Welcomecontainer" className="absolute font-xs w-full bottom-[50%] text-8xl">
      <h3 id="WelcomeMessage"  className='text-5xl font-medium text-white tracking-tighter text-center'>53 West 53</h3>
      </div>

      {/* down text */}
      <div className="text-white">
      <div id="modernAnimi" className="absolute overflow-hidden font-normal text-8xl bottom-[110px] left-8">
        <div className=" overflow-hidden">
        <h1 id="modernAnimiText" className="">A Modern</h1>
        </div>
      </div>

      <div id="modernAnimi" className="absolute overflow-hidden font-normal text-8xl bottom-7 left-8">
        <div className=" overflow-hidden">
        <h1 id="modernAnimiText" className="">Heirloom</h1>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
