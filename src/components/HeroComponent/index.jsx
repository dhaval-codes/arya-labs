"use client";
import React from "react";
import {
  HeroAnimationWrpr,
  HeroComponentWrpr,
  HeroTextWrpr,
  HeroTitle,
} from "./style";
import ScrambleTextLoop from "../ScrambledText";
import MatrixDotEarth from "../MatrixEarth";

const scrambledTextsData = [
  "Artificial Intelligence",
  "Cutting-Edge Technology",
  "Arya Labs",
];

function HeroComponent() {
  return (
    <HeroComponentWrpr>
      <HeroTextWrpr>
        <HeroTitle>
          Fastrack Innovation with
          <br />
          <ScrambleTextLoop texts={scrambledTextsData} />
        </HeroTitle>
      </HeroTextWrpr>
      <HeroAnimationWrpr>
        <MatrixDotEarth />
      </HeroAnimationWrpr>
    </HeroComponentWrpr>
  );
}

export default HeroComponent;
