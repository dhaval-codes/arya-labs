"use client";

import React from "react";
import {
  AboutBoxWrpr,
  DataBox,
  DataBoxHeading,
  DataBoxText,
  MiddleLine,
} from "./style";

function AboutBox({ data }) {
  const leftAlign = data.leftside ? "right" : "left";
  const rightAlign = data.rightside ? "left" : "right";

  console.log(data, "about data");

  return (
    <AboutBoxWrpr>
      <DataBox align={leftAlign}>
        {data.leftside && (
          <>
            <DataBoxHeading>{data.leftside.heading}</DataBoxHeading>
            <DataBoxText>{data.leftside.text}</DataBoxText>
          </>
        )}
      </DataBox>
      <MiddleLine />
      <DataBox align={rightAlign}>
        {data.rightside && (
          <>
            <DataBoxHeading>{data.rightside.heading}</DataBoxHeading>
            <DataBoxText>{data.rightside.text}</DataBoxText>
          </>
        )}
      </DataBox>
    </AboutBoxWrpr>
  );
}

export default AboutBox;
