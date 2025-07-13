"use client";
import React from "react";
import {
  ContractedBoxWrpr,
  ExpandedTextHeader,
  ExpandedTextWrpr,
} from "./style";

function ContractedBox({ data }) {
  return (
    <ContractedBoxWrpr bgimage={data.image}>
      <ExpandedTextWrpr>
        <ExpandedTextHeader>{data.label}</ExpandedTextHeader>
      </ExpandedTextWrpr>
    </ContractedBoxWrpr>
  );
}

export default ContractedBox;
