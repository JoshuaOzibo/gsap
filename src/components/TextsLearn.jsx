import React, { useRef, useEffect } from 'react';
import imageOne from './images/pexels-chandrianggara-18477163.jpg';
import imageTwo from './images/pexels-kampus-8380030.jpg';
import imageThree from './images/pexels-yash-dave-539971998-19790464.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextsLearn = () => {
  const containerOne = useRef(null);
  const containerTwo = useRef(null);
  const containerThree = useRef(null);

  useEffect(() => {
    // Animation for containerOne
    gsap.from(containerOne.current, {
      scrollTrigger: {
        trigger: containerOne.current, // corrected 'trigger'
        start: "top center",
        scrub: true,
        markers: true,
      },
      opacity: 0,
      duration: 2,
      x: 1000,
    });

    // // Animation for containerTwo
    // gsap.from(containerTwo.current, {
    //   scrollTrigger: {
    //     trigger: containerTwo.current,
    //     start: "top center",
    //     scrub: true,
    //     markers: true,
    //   },
    //   opacity: 0,
    //   duration: 2,
    //   x: 1000,
    // });

    // // Animation for containerThree
    // gsap.from(containerThree.current, {
    //   scrollTrigger: {
    //     trigger: containerThree.current,
    //     start: "top center",
    //     scrub: true,
    //     markers: true,
    //   },
    //   opacity: 0,
    //   duration: 2,
    //   x: 1000,
    // });
  }, []); // Empty dependency array ensures the animation runs only once after initial render.

  return (
    <section className='py-[900px]'>
      <div className='flex flex-col gap-[200px]'>
        <main ref={containerOne} id='container' className='flex w-full h-[800px] bg-slate-300 items-center'>
          <img className='w-[600px] h-[500px]' src={imageOne} alt="Image One" />
          <div>
            <h1 className='pb-5 font-bold text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, natus.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit totam sint 
              debitis enim est maiores pariatur odio hic eligendi saepe veritatis similique 
              commodi, consequatur, eius amet molestiae quo. Autem, vitae!
            </p>
          </div>
        </main>

        <main  className='flex items-center'>
          <div>
            <h1 className='pb-5 font-bold text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, natus.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit totam sint 
              debitis enim est maiores pariatur odio hic eligendi saepe veritatis similique 
              commodi, consequatur, eius amet molestiae quo. Autem, vitae!
            </p>
          </div>
          <img className='w-[500px] h-[500px]' src={imageTwo} alt="Image Two" />
        </main>

        <main  className='flex items-center'>
          <img className='w-[500px] h-[500px]' src={imageThree} alt="Image Three" />
          <div>
            <h1 className='pb-5 font-bold text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, natus.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit totam sint 
              debitis enim est maiores pariatur odio hic eligendi saepe veritatis similique 
              commodi, consequatur, eius amet molestiae quo. Autem, vitae!
            </p>
          </div>
        </main>
      </div>
    </section>
  );
};

export default TextsLearn;
