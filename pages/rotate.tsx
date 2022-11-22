import React from "react";
import { NextPage } from "next";
import RotateHeader from "../src/components/rotate-header/RotateHeader";
import RotateNewSection from "../src/components/rotate-section/RotateNewSection";

const Rotate: NextPage = () => {
  return (
    <div>
      <RotateHeader />
      <RotateNewSection />
    </div>
  );
};

export default Rotate;
