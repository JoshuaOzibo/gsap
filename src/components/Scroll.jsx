import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
  useGSAP(() => {
    let tl = gsap
    tl.to(".b", {
      scrollTrigger: {
        trigger: ".b",
        start: "top center",
        end: "",
        markers: true,
        pin: ".c",
        pinSpacing: true,
        scrub: true,
        toggleActions: "restart pause reverse pause",
      },
      x: 600,
      scale: 5,
      rotation: 360,
      duration: 3,
    });
  }, []);
  return (
    <div className="w-full flex flex-col justify-between h-[1500px]">
      <div className="h-[900px] flex flex-col justify-between">
        <div className="a w-[100px] h-[100px] border text-center bg-red-500">
          Box a
        </div>
        <div className="b w-[100px] h-[100px] border text-center bg-blue-500">
          Box b
        </div>
        <div className="c w-[100px] h-[100px] border text-center bg-orange-500">
          Box c
        </div>
      </div>
    </div>
  );
};

export default Scroll;
