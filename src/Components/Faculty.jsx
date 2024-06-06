import React, { useState } from "react";
import gsap, { Power2 } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
export default function Faculty() {
    gsap.registerPlugin(ScrollTrigger);
    const [enter,setEnter]=useState(false)
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        // Animation for #g1
        gsap.from("#g1", {
          y: 25,
          opacity: 0,
          duration: 2,
        });
    
        // Animation for #g2, #g3, and #g4
        gsap.from(["#g2", "#g3", "#g4"], {
          y: 25,
          opacity: 0,
          stagger: 0.5,
          duration: 2,
        });
      }, [enter]);
    return (
    <>
      <div className=" w-screen flex flex-col relative top-20" id="g1" onTouchStart={()=>setEnter(true)} style={{
        height:'70vh'
      }}>
        <div className="text-center text-4xl p-4 font-bold text-white">
          {enter?"Our Feculty":undefined}
        </div>
       {enter?<>
        <div className=" w-screen flex flex-row gap-2 justify-center h-40" id="g2">
          <div className="rounded-full bg-yellow-300 self-center w-32 h-32" style={{
            boxShadow:"0px 0px 10px orange",
            backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTceFpKY7dveWYOthci3_aJ0CyXzBPRFK61wQ&s)",
            backgroundPosition:"center",
            backgroundSize:'cover'
          }}></div>
          <div className="w-40 h-40  justify-center flex flex-col">
            <div className="text-4xl text-nowrap font-semibold text-orange-500">Rajwant sir</div>
            <div className="text-nowrap text-white">Physics Teacher</div>
            <div className="text-nowrap text-white">10+ years of Experience</div>
          </div>
        </div>
        <div className=" w-screen flex flex-row gap-2 justify-center h-40" id="g3">
        <div className="w-40 h-40  justify-center flex flex-col">
            <div className="text-4xl text-nowrap font-semibold text-orange-500">Sachin sir</div>
            <div className="text-nowrap text-white">Maths Teacher</div>
            <div className="text-nowrap text-white">8+ years of Experience</div>
          </div>
          <div className="rounded-full bg-yellow-300 se lf-center w-32 h-32"style={{
            backgroundImage:"url(https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode400/35787116/35787116-1713510279842-440a2746ce933.jpg)",
            boxShadow:"0px 0px 10px orange",
            backgroundPosition:"center",
            backgroundSize:'cover'
          }}></div>
        </div>
        <div className=" w-screen flex flex-row gap-2 justify-center h-40" id="g4">
          <div className="rounded-full bg-yellow-300 self-center w-32 h-32" style={{
            backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBCMVDmXnb51n2V8Pp06wBiImQrvyRjvD2Q&s)",
            boxShadow:"0px 0px 10px orange",
            backgroundPosition:"center",
            backgroundSize:'cover'
          }}></div>
           <div className="w-40 h-40  justify-center flex flex-col">
            <div className="text-4xl text-nowrap font-semibold text-orange-500">Pankaj sir</div>
            <div className="text-nowrap text-white">Chemisry Teacher</div>
            <div className="text-nowrap text-white">12+ years of Experience</div>
          </div>
        </div></>:undefined}
      </div>
    </>
  );
}
