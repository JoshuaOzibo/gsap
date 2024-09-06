import React, {useRef} from "react";
import image from "./images/pexels-kampus-8380030.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);


const Image = () => {
    const container = useRef();
    const selfImg = useRef();
    const blackOverlay = useRef();
    

    useGSAP(() => {
        let tl =gsap.timeline();
        tl.from("#container", {
            opacity: 0, duration: 0.5
        })
        tl.to("#overlay", {
            xPercent: "+=100",
            duration: 0.5,
            delay: 0.5,
            yoyo: true
        });

        tl.from("#image", {scale: 1.5, duration: 0.5, delay: -0.4});

    }, [])

  return (
    <div>
      <h1 className="text-8xl font-bold">Img</h1>
      <div id="container" className="relative overflow-hidden w-[700px] h-[500px] flex justify-center rounded-md items-center border">
        <div>
          <img id="image" className="w-[600px] h-[400px]" src={image} alt="img" />
        </div>
        <div id="overlay" className="w-full h-full absolute bg-black rounded-md"></div>
      </div>
    </div>
  );
};

export default Image;
