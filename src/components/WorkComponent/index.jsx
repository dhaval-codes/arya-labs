"use client";
import React from "react";
import {
  ButtonWrpr,
  WorkComponentWrpr,
  WorkHeader,
  WorkSubHeader,
} from "./style";
import { WorkData } from "@/data/workdata";
import ExpandedBox from "../BentoBox/ExpandedBox";
import ContractedBox from "../BentoBox/ContractedBox";
import BentoBox from "../BentoBox";
import { PrimaryButton } from "../Buttons";

const items = WorkData.map((data) => ({
  contracted: <ContractedBox data={data} />,
  expanded: <ExpandedBox data={data} />,
  heading: data.label,
  image: data.image,
}));

function WorkComponent() {
  return (
    <WorkComponentWrpr>
      <WorkHeader>work</WorkHeader>
      <WorkSubHeader>
        We make products with Bussiness Impact leveraging AI
      </WorkSubHeader>
      <BentoBox items={items} />
      <ButtonWrpr>
        <PrimaryButton label="See more" />
      </ButtonWrpr>
    </WorkComponentWrpr>
  );
}

export default WorkComponent;
