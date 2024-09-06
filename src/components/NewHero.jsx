import React from "react";
import { useGSAP } from "@gsap/react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "./images/pexels-chandrianggara-18477163.jpg";
import imgTwo from "./images/pexels-yash-dave-539971998-19790464.jpg";
import imgThree from "./images/pexels-kampus-8380030.jpg";

gsap.registerPlugin(ScrollTrigger);

const NewHero = () => {
  useGSAP(() => {
    let colors = [
      "#FF5733",
      "#33FF57",
      "#3357FF",
      "#FF33A1",
      "#57FF33",
      "#A133FF",
      "#33FFA1",
    ];

    let tl = gsap.timeline();
    // tl.from("span", {
    //     opacity: 0,
    //     duration: 1,
    //     y: "-=100vh",
    //     ease: "bounce.out",
    //     ease: Power2.easeOut,
    //     stagger: {
    //         each: 0.2,
    //         onStart: function(index, target) {
    //             gsap.to(target, {
    //                 color: colors[index % colors.length]
    //             })
    //         }
    //     }
    // });

    // tl.to("#welcome", {
    //     opacity: 0,
    //     duration: 0.7,
    //     y: "-=100vh",
    //     scale: 0.05
    // });

    tl.from("#SecondContainer", {
      opacity: 0,
      duration: 0.8,
      delay: -0.7,
      y: "+=100vh",
    });

    tl.to("#suscsribe", {
      scrollTrigger: {
        trigger: "#suscsribe",
        start: "top bottom",
        scrub: true,
      },
      scale: 1.3,
      duration: 0.5,
    });

    tl.to("#premiaImg", {
      scrollTrigger: {
        trigger: "#premiaImg",
        start: "-=450",
        scrub: true,
        duration: 5,
      },
      scale: 4,
      yPercent: "270",
      duration: 5,
    });

    tl.to("#rk", {
      scrollTrigger: {
        trigger: "#rk",
        start: "-=350",
        scrub: true,
      },
      // delay: -0.4,
      duration: 5,
      ease: "power2.in",
      xPercent: "-=90",
    });
    tl.to("#wk", {
      scrollTrigger: {
        trigger: "#rk",
        start: "-=350",
        scrub: true,
      },
      // delay: -0.4,
      duration: 5,
      ease: "power2.in",
      xPercent: "+=90",
    });

    tl.to("#serviceContainer", {
        scrollTrigger: {
            trigger: "",
            start: "+=100",
            scrub: true,
            // markers: true
        },
        css: {zIndex: 15},
        y: "-=100",
        duration: 2,
        delay: -2
    })
    
  }, []);

  return (
    //#1e1e1e
    <div className=" relative flex items-center justify-center bg-[#1e1e1e] text-white h-[100vh] w-full">
      <h1 id="welcome" className="absolute text-9xl font-black">
        <span>W</span>
        <span>E</span>
        <span>L</span>
        <span>C</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
      </h1>
      <div id="SecondContainer" className="absolute w-full h-full bg-[#e5e7df]">
        {/* nav */}
        <nav className=" w-full flex justify-center h-[50px] text-[#1e1e1e] font-bold bg-red-500">
          <div className="w-[80%] flex justify-between items-center">
            <h1>Better Off</h1>

            <div className=" w-[50%] bg-slate-400 flex justify-center space-x-3 items-center">
              <p>OverView</p>
              <p>Work</p>
              <p>Feed</p>
            </div>

            <p>Pricing</p>
          </div>
        </nav>

        {/* Hero */}
        <div className="mt-[500px] flex justify-between items-center">
          <div className="w-[25%]">
            <p className="font-bold text-sm">
              Pick a plan, submit a job request, and your project will kickoff
              within 24 hours.
            </p>
            <input type="text" placeholder="Explore Plans" />
          </div>

          <div className="w-[60%]">
            <p className="text-4xl font-medium ">
              Premium quality creative at lean rates for growing businesses.
              Packaged as subscriptions or bundled projects.
            </p>
          </div>
        </div>

        <div className="flex py-[200px] items-center overflow-hidden">
          <h1 id="suscsribe" className="text-[270px] font-bold text-black">
            SUBSCRIBE
          </h1>
          <img
            className="w-[300px] h-[300px] object-cover"
            src="https://www.datocms-assets.com/106915/1717687178-betteroffstudio_work-loop_10.jpg?auto=format%2Ccompress&dpr=1.5&fit=max&h=800&w=800"
            alt="Sliding Img"
          />
        </div>

        {/* premium */}
        <div className="w-full relative bg-slate-400 flex flex-cols justify-center text-black overflow-hidden py-[200px] pb-[500px]">
          <h1 className="text-[200px] absolute text-center font-bold text-black">
            Premium
          </h1>
          <div className="flex justify-center mt-[150px] relative">
            <span id="wk" className="text-[200px] font-bold text-black ">
              WO
            </span>
            <img
              id="premiaImg"
              className=" z-10 scale-[1] mt-[95px] w-[200px] object-cover h-[137px]"
              src={img}
              alt="img"
            />
            <span id="rk" className="text-[200px] font-bold text-black ">
              RK
            </span>
          </div>
        </div>

        {/* services */}
        <div id="serviceContainer" className="text-black pt-[100px] pb-[400px]">
          <div className=" flex justify-between w-[90%]">
            <div >
                <h4 className="font-bold text-sm">● CONCIERGE CREATIVE</h4>
                <h4 className="font-medium text-sm">(BO® — 03)</h4>
            </div>
            <h2 className=" w-[70%] text-3xl font-medium">
              Superior brands require sophisticated capabilities that many
              businesses couldn't access until now.
            </h2>
          </div>
          <h1 className=" text-center font-bold text-[200px]">Services</h1>
        </div>
      </div>
    </div>
  );
};

export default NewHero;
