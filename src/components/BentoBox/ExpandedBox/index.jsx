"use client";
import React from "react";
import {
  ExpandedBoxWrpr,
  ExpandedTextDescription,
  ExpandedTextHeader,
  ExpandedTextWrpr,
} from "./style";

function ExpandedBox({ data }) {
  return (
    <ExpandedBoxWrpr bgimage={data.image}>
      <ExpandedTextWrpr>
        <ExpandedTextHeader>{data.label}</ExpandedTextHeader>
        <ExpandedTextDescription>{data.description}</ExpandedTextDescription>
      </ExpandedTextWrpr>
    </ExpandedBoxWrpr>
  );
}

export default ExpandedBox;
