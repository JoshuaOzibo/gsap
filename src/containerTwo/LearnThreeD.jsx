import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const LearnThreeD = () => {
  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from("#TextContainerOne", {
      overflowY: "hidden",
    });

    tl.from("#TextOne", {
      scrollTrigger: {
        trigger: "#TextOne",
        start: "-=2500",
        scrub: true,
      },
      y: 400,
      x: 20,
      duration: 0.5,
      stagger: {
        each: 0.09,
      },
    })
    tl.from(["#RedShiftText", "#image"], {
      scrollTrigger: {
        trigger: "#TextOne",
        start: "-=2100",
        scrub: true,
        // markers: true
      },
      y: 400,
      x: 20,
      duration: 0.5,
      stagger: {
        each: 0.002,
      },
    });
    tl.to( "#image", {
      scrollTrigger: {
        trigger: "#TextOne",
        scrub: true,
        // markers: true
      },
      
      scale: 0.0003,
      duration: 0.5,
      duration: 3,
      ease: "bounce.out",
      css: {
        translateY: "-=200",
        borderRadius: "+=150"
      }
    });

    // tl.from("#image", {
    //   st
    // })

  }, []);

  return (
    <section className="py-[100px]">
      <div>
        <div>
          {/* section one */}
          <div className="w-full py-5">
            <div id="TextContainerOne" className=" overflow-hidden mb-[-50px]">
              <h1 id="TextOne" className="font-medium text-9xl">
                Learn 3d
              </h1>
            </div>
            <div id="TextContainerOne" className=" mt-4 overflow-hidden">
              <h1 id="TextOne" className="font-medium pb-2 text-9xl mb-8">
                wizardry
              </h1>
            </div>
          </div>

          {/* section two */}
          <div className="w-full flex justify-between my-20">
            <div className="w-[38%]">
              <p className="text-xs">
                I will be covering a whole range of content from Lighting and
                Shading Techniques to Animation and everything in-between.
              </p>

              <p>Get a free patreon tutorial sample</p>
            </div>
            <div className="flex relative right-0 w-[45%]">
              <div className="">
                <img
                id="image"
                  className="scale-[0.4] -left-[160px] -top-[80px] absolute"
                  src="https://www.datocms-assets.com/92457/1694943431-patreon-hero-small.jpg?fit=max&fm=webp&h=3000&w=2000"
                  alt="img"
                />
                <div id="TextContainerOne" className=" absolute overflow-hidden border-b-5 mt-[70px]">
                <h1 id="RedShiftText" className="text-8xl font-medium">
                  Redshift
                </h1>
                </div>
              </div>
              <div id="TextContainerOne" className=" -mt-4 right-0 absolute overflow-hidden">
                <h1 id="RedShiftText" className="text-8xl font-medium">C4D & </h1>
              </div>
            </div>
          </div>

          <div className="mt-[120px]">
            <img
              className="h-screen object-fill w-full"
              src="https://www.datocms-assets.com/92457/1695075053-remoteworking_daytime_v001_16-9-min.jpg?fit=max&fm=webp&h=3000&w=2000"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnThreeD;
