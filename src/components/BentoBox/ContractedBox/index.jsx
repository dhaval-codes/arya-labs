"use client";
import React from "react";
import { ContractedBoxWrpr } from "./style";

function ContractedBox({ data }) {
  return <ContractedBoxWrpr bgImage={data.image}></ContractedBoxWrpr>;
}

export default ContractedBox;
