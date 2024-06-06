import React from "react";
import gsap, { Power2 } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
export default function LandingPage() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".arrow", {
      x: 600,
      // repeat:-1,
      duration: 2,
      scrollTrigger: {
        trigger: ".container",
        start: "top 0",
        end: "bottom 80", // Adjust start position as needed
        markers: false,
        pin: true,
        scrub: 1, // Adjust scrubbing intensity as needed
      },
    });
  });
  useGSAP(() => {
    // gsap code here...
    gsap.from(".nameContainer", {
      y: 30,
      opacity: 0,
      duration: 1,
    }); // <-- automatically reverted
  });
  return (
    <>
      <center>
        <div className="container w-screen h-11/12 overflow-x-hidden overflow-y-hidden  justify-end flex flex-col ">
          <div
            className="w-screen  self-center"
            style={{
              height: "90vh",
              backgroundImage:
                'url("https://cdn.pixabay.com/photo/2019/08/24/22/37/archery-4428513_1280.png")',
              backgroundPosition: "center",
              filter: "brightness(0.7)",
              borderImage: "fill 0 linear-gradient(#0001,#000)",
              backgroundSize: "cover",
            }}></div>
          <div
            className="z-10 absolute bottom-10 -left-56  arrow w-40 h-5"
            style={{
              backgroundImage: "url(https://iili.io/JplzxKF.md.png)",
              backgroundSize: "cover",
              filter: "drop-shadow(2px 4px 10px yellow)",
              backgroundPosition: "center",
            }}></div>
          <div className="nameContainer absolute bottom-10 flex self-center flex-row bg-transparent w-fit h-fit ">
            <div className="text-white text-7xl inline  font-bold bg-transparent ">
              E
            </div>
            <div className="text-white text-7xl inline  font-bold bg-transparent lowercase">
              K
            </div>
            <div className="text-white text-7xl inline  font-bold bg-transparent lowercase">
              L
            </div>
            <div className="text-white text-7xl inline  font-bold bg-transparent lowercase">
              A
            </div>
            <div className="text-white text-7xl inline  font-bold bg-transparent lowercase">
              V
            </div>
            <div className="text-white text-7xl inline  font-bold bg-transparent lowercase">
              Y
            </div>
            <div className="text-white text-7xl inline  font-bold bg-transparent lowercase">
              A
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
