import React from "react";
import Header from "./components/Header";
import BannerSection from "./components/BannerSection";
import KeyFeatures from "./components/KeyFeatures";
import HowitWorks from "./components/HowitWorks";
import Testimonials from "./components/Testimonials";
const App = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1 ">
        <BannerSection />
        <KeyFeatures />
        <HowitWorks />
        <Testimonials />
      </main>
    </div>
  );
};

export default App;
