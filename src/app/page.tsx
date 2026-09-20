import React from "react";
import Hero from "@/components/homePage/Hero";
import Books from "@/components/homePage/Books";

const HomePage = async () => {
  return (
    <div>
      <Hero />
      <Books />
    </div>
  );
};

export default HomePage;
