"use client";

import Lottie from "lottie-react";
import boneyardLogo from "../../public/boneyard.json";

export function Logo() {
  return (
    <div className="mt-5 md:mt-0">
      <Lottie
        animationData={boneyardLogo}
        loop={true}
        autoplay={true}
        style={{ width: 300, height: 80, marginLeft: -60, marginTop: -40 }}
      />
    </div>
  );
}
