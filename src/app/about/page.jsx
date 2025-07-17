"use client";

import React from "react";
import { PageWrpr } from "../style";
import {
  AboutPageHeading,
  AboutSection,
  AboutSubHeader,
  DataHeading,
  DataText,
  IndustryText,
  TextOverlay,
  WorldMapSectionWrpr,
  WorldMapWrpr,
} from "./style";

import { AboutPageData, IndustryExport } from "@/data/aboutpagedata";
import MatrixDotMap from "@/components/WorldMap";
import AboutBox from "@/components/AboutBoxes";

function AboutPage() {
  return (
    <PageWrpr>
      <AboutPageHeading>About</AboutPageHeading>
      <AboutSubHeader>
        A true partner for digital innovation. <span>Arya Labs</span> can take
        your ideas to reality
      </AboutSubHeader>
      <AboutSection>
        {AboutPageData.map((data, index) => {
          return <AboutBox data={data} key={index} />;
        })}
      </AboutSection>
      <WorldMapSectionWrpr>
        <DataText>Our team have delivered over</DataText>
        <DataHeading>10+ products across major industry sectors</DataHeading>
        <WorldMapWrpr>
          <MatrixDotMap />
          <TextOverlay>
            {IndustryExport.map((data, index) => {
              return <IndustryText key={index}>{data}</IndustryText>;
            })}
          </TextOverlay>
        </WorldMapWrpr>
      </WorldMapSectionWrpr>
    </PageWrpr>
  );
}

export default AboutPage;
