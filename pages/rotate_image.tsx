import React from "react";
import { NextPage } from "next";

import RotateHeader from "@components/rotate-header/RotateHeader";
import RotateSection from "@components/rotate-section/RotateSection";

const Rotate: NextPage = () => {
  return (
    <div>
      <RotateHeader />
      <RotateSection />
    </div>
  );
};

export default Rotate;
