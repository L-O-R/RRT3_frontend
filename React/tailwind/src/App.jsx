import React from "react";
import "./App.css";
const App = () => {
  return (
    <div className="">
      <h1 className="text-5xl text-right font-extrabold font-Arial">
        Hello
      </h1>
      <div className="w-[50rem] h-auto border-4 border-amber-400 flex">
        <img
          src="https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg"
          alt=""
          className="  object-fit brightness-100 mix-blend-lighten"
        />
      </div>

      <section
        className="border border-amber-300 bg-amber-100 w-[100%] h-screen 
                            flex justify-center  items-center gap-9 ">
        <div
          className="border border-black p-4 basis-7xl bg-amber-800 relative  
                  after:content-['Hello'] after:absolute after:right-0 after:z-30"></div>
        <div className="border border-black p-4  w-[900px]"></div>
        <div className="border border-black p-4  w-[900px]"></div>
        <div className="border border-black p-4"></div>
        <div className="border border-black p-4"></div>
      </section>
    </div>
  );
};

export default App;
