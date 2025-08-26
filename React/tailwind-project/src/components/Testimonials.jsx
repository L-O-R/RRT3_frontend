import React, { useRef } from "react";
import Heading from "./ui/Heading";

const Testimonials = () => {
  const leftButton = useRef(null);

  console.log(leftButton);
  return (
    <section className="py-20 space-y-16">
      <div>
        <Heading span={"Testi"} head={"monials"} />
      </div>
      <div className="flex flex-row justify-center items-center gap-10 flex-nowrap overflow-hidden -translate-x-20">
        <article className="w-[350px] aspect-[1/0.7] border border-blue-500 shrink-0 "></article>
        <article className="w-[350px] aspect-[1/0.7] border border-blue-500 shrink-0 "></article>
        <article className="w-[350px] aspect-[1/0.7] border border-blue-500 shrink-0 "></article>
        <article className="w-[350px] aspect-[1/0.7] border border-blue-500 shrink-0 "></article>
        <article className="w-[350px] aspect-[1/0.7] border border-blue-500 shrink-0 "></article>
        <article className="w-[350px] aspect-[1/0.7] border border-blue-500 shrink-0 "></article>
        <article className="w-[350px] aspect-[1/0.7] border border-blue-500 shrink-0 "></article>
        <article className="w-[350px] aspect-[1/0.7] border border-blue-500 shrink-0 "></article>
        <article className="w-[350px] aspect-[1/0.7] border border-blue-500 shrink-0 "></article>
        <article className="w-[350px] aspect-[1/0.7] border border-blue-500 shrink-0 "></article>
      </div>
      <div className="flex justify-center  items-center gap-8">
        <button
          className="bg-blue-400 p-4 rounded-full"
          ref={leftButton}>
          &#10094;
        </button>
        <button className="bg-blue-400  p-4 rounded-full">
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
