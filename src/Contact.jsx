import React from "react";

export default function Contact() {
  return (
    <>
      <div className="w-screen h- flex flex-col justify-center gap-7 relative top-28">
        <div className="flex flex-row  justify-center gap-10 w-screen h-32">
          <div className="rounded-2xl self-center w-20 h-20 flex flex-col">
            <div className="text-green-500 font-bold text-2xl text-nowrap relative right-10">Whatsapp us</div>
            <div><i class="fa-brands text-4xl text-green-500  self-center fa-square-whatsapp active:text-green-700 mx-4"></i></div>
          </div>
          <div
            className="w-28 h-28 rounded-2xl bg-transparent self-center"
            style={{
            filter: 'drop-shadow(0px 6px 13px green)',
              backgroundImage: "url(https://iili.io/Jp0M65x.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}></div>
        </div>
      
      </div>
    </>
  );
}
