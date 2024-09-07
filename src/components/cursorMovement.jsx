import React, {useEffect, useRef} from 'react'
import Img from './images/pexels-chandrianggara-18477163.jpg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const ImageTwo = () => {
    let tl = gsap.timeline();
    let cursor = useRef(null);
    let positionX = 0
    let positionY = 0;
    let mouseX = 0;
    let mouseY = 0;

    useGSAP(() => {
        
        tl.to({}, 0.016, {
            repeat: -1,
            onRepeat: () => {
                positionX += (mouseX - positionX) / 10
                positionY += (mouseY - positionY) / 10;

                tl.set(cursor.current, {
                    css: {
                        left: positionX - 50,
                        top: positionY - 50
                    }
                })
            }
        })


        document.addEventListener("mousemove", function(e){
            mouseX = e.pageX;
            mouseY = e.pageY;
      
          })

    }, [tl])
  return (
    <div>
      
      <img
        ref={cursor}
        className="w-[100px] absolute"
        src={Img}
        alt="Img"
      />
    </div>
  )
}

export default ImageTwo
