import React from "react";
import gsap, { Power2 } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function Achievement() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.timeline().from(".Achievement", {
      y: 25,
      scale: 0.7,
      duration: 2,
      color:"#111",
      scrollTrigger: {
        trigger: ".Achievement",
        start: "top 70%",
        end: "bottom 90%",
        // markers: true,
        pin: true,
        scrub: 2, // Adjust scrubbing intensity as needed
      },
    });
  });
   useGSAP(() => {
    gsap.from(".a1", {
      y: 25,
      scale: 0.7,
      duration: 2,  
      scrollTrigger:{
        trigger:".a1",
        // markers:true,
        start:"top center"
      }
    });
  });
  return (
    <>
      <div className="c1 w-screen h-fit relative flex flex-col ">
        <div className="Achievement text-white text-4xl self-center relative top-6 font-bold ">
          Achievements
        </div>
        <div className="a1 flex flex-row relative top-10 justify-center">
          <div
            className="w-32 self-center h-32"
            style={{
              boxShadow: " 0px 10px 10px #ff7a00",
              backgroundImage:
                "url(https://img.freepik.com/free-photo/girl-with-book-looking-camera_23-2147668963.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}></div>
          <div className=" h-40 w-44 no-wrap p-9 text-left flex flex-row justify-start">
            <ul className=" text-white -mx-5  self-center text-sm">
              <li className="flex flex-row"><div className="text-orange-500">Name</div> :- Sara </li>
              <li className="w-full text-nowrap"> Board Exam :- 93pr(85%) </li>
              <li className="w-full text-nowrap">JEE Exam :- 94 percentile</li>
              <li className="w-full text-nowrap text-xs">
                College Admission :- Nirma
              </li>
              <li className="w-full text-nowrap">Course :- B-Tech(CSE)</li>
              <li className="w-full text-nowrap">Batch :-2023-24</li>
            </ul>
          </div>
        </div>
        <div className=" a1 flex flex-row relative top-10 justify-center">
          <div
            className=" w-32 self-center h-32"
            style={{
              boxShadow: " 0px 10px 10px #ff7a00",
              backgroundImage:
                "url(https://akm-img-a-in.tosshub.com/indiatoday/images/story/202108/muhammad-rizwan-VnydpKiCDaY-un_0_1200x768.jpeg?size=690:388    )",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}></div>
          <div className=" h-40 w-44 no-wrap p-9 text-left flex flex-row justify-start">
            <ul className=" text-white self-center  -mx-5 text-sm">
              <li className="flex flex-row"><div className="text-orange-500">Name</div> :- Aditya </li>
              <li className="w-full text-nowrap"> Board Exam :- 98pr(90%) </li>
              <li className="w-full text-nowrap">NEET Exam :- 98 percentile</li>
              <li className="w-full text-nowrap text-xs">
                College Admission :- JBC
              </li>
              <li className="w-full text-nowrap">Course :- BAMS</li>
              <li className="w-full text-nowrap">Batch :-2019-20</li>
            </ul>
          </div>
        </div>
        <div className=" a1 flex flex-row relative top-10 justify-center">
          <div
            className=" w-32 self-center h-32"
            style={{
              boxShadow: " 0px 10px 10px #ff7a00",
              backgroundImage:
                "url(https://media.istockphoto.com/id/1581045672/photo/education-laptop-student-computer-teenager-studying-boy-learning-homework-study-young-school.jpg?s=612x612&w=0&k=20&c=ytSpytOADNigrtZTFZkZwYmjBeEculuHc_2MLEvpKNk=)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}></div>
          <div className=" h-40 w-44 no-wrap p-9 text-left flex flex-row justify-start">
            <ul className=" text-white self-center  -mx-5 text-sm">
              <li className="flex flex-row"><div className="text-orange-500">Name</div> :- Sahil </li>
              <li className="w-full text-nowrap"> Board Exam :- 99pr(92%) </li>
              <li className="w-full text-nowrap">JEE Exam :- 99 percentile</li>
              <li className="w-full text-nowrap text-xs">
                College Admission :- IIT
              </li>
              <li className="w-full text-nowrap">Course :- B-Tech(EEE)</li>
              <li className="w-full text-nowrap">Batch :-2022-23</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
