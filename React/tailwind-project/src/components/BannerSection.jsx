import React from "react";
import Hero from "../assets/hero.png";
import Circle from "./ui/Circle";
const BannerSection = () => {
  return (
    <section className="min-h-screen flex items-center mt-20 lg:mt-0 relative">
      <Circle
        className={
          "w-[18rem] h-[18rem] rounded-full bg-blue-50/80 absolute -top-20 -left-30 -z-0"
        }
      />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        {/* text content */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-6xl flex flex-col leading-[100%] font-primary font-semibold">
            <span>
              <strong className="font-semibold text-[#0004ff]">
                Summarize
              </strong>{" "}
              Your
            </span>
            <span>Notes in Seconds</span>
          </h1>
          <p className="text-base md:text-xl max-w-xl">
            Effortlessly condense your study material and
            save time for what matters most.
          </p>
          <button className="bg-[#0004ff] text-white p-3 lg:p-4 rounded-xl">
            Summarize my notes
          </button>
        </div>
        {/* img container */}
        <div className="flex-1">
          <img
            src={Hero}
            alt="Hero Banner"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
