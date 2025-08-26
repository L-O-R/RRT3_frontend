import React from "react";
import vide from "../assets/how.mp4";
import Heading from "./ui/Heading";

const content = [
  {
    num: "01",
    title: "Upload Notes",
    concept:
      "A student dragging a document into the app or clicking the upload button to add their notes.",
  },
  {
    num: "02",
    title: "Upload Notes",
    concept:
      "A student dragging a document into the app or clicking the upload button to add their notes.",
  },
  {
    num: "03",
    title: "Upload Notes",
    concept:
      "A student dragging a document into the app or clicking the upload button to add their notes.",
  },
];

const HowitWorks = () => {
  return (
    <section className="py-20 space-y-16">
      <div>
        <Heading span={"How"} head={"it works"} />
      </div>
      <div className="flex gap-6 justify-center items-center max-w-[90%] mx-auto">
        <div className=" flex-1 space-y-8">
          {content.map((item) => (
            <div className="flex gap-4 items-start justify-center pr-6 ">
              <span>{item.num}</span>
              <div>
                <h3>{item.title}</h3>
                <p>
                  <strong>Concept:</strong>
                  <br />
                  <p>{item.concept}</p>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex-1">
          <video autoplay muted loop controls>
            <source src={vide} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default HowitWorks;
