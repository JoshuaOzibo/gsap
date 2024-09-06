import React, {useRef, useState} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Text = () => {
    const [state, setState] = useState(true)

    const container = useRef();
    gsap.registerPlugin(useGSAP);
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".ball", {x: -100, opacity: 0, duration: 0.5, stagger: 0.5})
        
    }, []);

    const handleBallOne =() => {
        let tl = gsap.timeline();
        tl.to("#ball1", {
            width: 150, height: 150
        })
    }
    


  return (
    <div ref={container} className='w-full flex justify-center'>
      <div className='flex flex-col space-y-5 m-auto'>
      <div onClick={handleBallOne(setState(item => !item))} id='ball1' className='ball w-[100px] h-[100px] border rounded-full bg-yellow-500'></div>
      <div className='ball w-[100px] h-[100px] border rounded-full bg-red-500'></div>
      <div className='ball w-[100px] h-[100px] border rounded-full bg-blue-500'></div>
      </div>
    </div>
  )
}

export default Text
