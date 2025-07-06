"use client";
import React from "react";
import { WorkComponentWrpr, WorkHeader, WorkSubHeader } from "./style";
import { WorkData } from "@/data/workdata";
import ExpandedBox from "../BentoBox/ExpandedBox";
import ContractedBox from "../BentoBox/ContractedBox";
import BentoBox from "../BentoBox";

const items = [
  {
    contracted: <ContractedBox data={WorkData[0]} />,
    expanded: <ExpandedBox data={WorkData[0]} />,
  },
  {
    contracted: <ContractedBox data={WorkData[1]} />,
    expanded: <ExpandedBox data={WorkData[1]} />,
  },
  {
    contracted: <ContractedBox data={WorkData[2]} />,
    expanded: <ExpandedBox data={WorkData[2]} />,
  },
  {
    contracted: <ContractedBox data={WorkData[3]} />,
    expanded: <ExpandedBox data={WorkData[3]} />,
  },
  {
    contracted: <ContractedBox data={WorkData[4]} />,
    expanded: <ExpandedBox data={WorkData[4]} />,
  },
  {
    contracted: <ContractedBox data={WorkData[5]} />,
    expanded: <ExpandedBox data={WorkData[5]} />,
  },
];

function WorkComponent() {
  return (
    <WorkComponentWrpr>
      <WorkHeader>work</WorkHeader>
      <WorkSubHeader>
        We make products with Bussiness Impact leveraging AI
      </WorkSubHeader>
      <BentoBox items={items} />
    </WorkComponentWrpr>
  );
}

export default WorkComponent;
