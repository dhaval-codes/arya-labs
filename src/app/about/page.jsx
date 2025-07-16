"use client";

import React from "react";
import { PageWrpr } from "../style";
import {
  AboutPageHeading,
  AboutSection,
  AboutSectionChild,
  AboutSubHeader,
  AboutText,
  DataBox,
  DataBoxHeading,
  DataBoxText,
  HeroComponent,
  HeroImageWrpr,
  MainLine,
} from "./style";

import { AboutPageData } from "@/data/aboutpagedata";

function AboutPage() {
  return (
    <PageWrpr>
      <AboutPageHeading>About</AboutPageHeading>
      <AboutSubHeader>
        A true partner for digital innovation. <span>Arya Labs</span> can take
        your ideas to reality
      </AboutSubHeader>
      <HeroComponent>
        <AboutText>
          Founded in 2025 by <span>Dhaval J Prasad</span>, Arya Labs emerged
          from a vision to transform how businesses interact with technology. We
          saw a gap between complex technical solutions and user-friendly
          experiences and integration of data driven ai. Today, we're proud to
          be working with clients worldwide, delivering innovative solutions
          that drive real business value and user engagement.
        </AboutText>
        <HeroImageWrpr>
          <img src="https://res.cloudinary.com/dli14hm5i/image/upload/v1752382324/Gemini_Generated_Image_907wlu907wlu907w_ws0vt9.png" />
        </HeroImageWrpr>
      </HeroComponent>
      <AboutSection>
        {AboutPageData.map((data, index) => {
          // Determine alignment for each DataBox
          const leftAlign = data.leftside ? "right" : "left";
          const rightAlign = data.rightside ? "left" : "right";
          return (
            <AboutSectionChild key={index}>
              <DataBox align={leftAlign}>
                {data.leftside ? (
                  <>
                    <DataBoxHeading>{data.leftside.heading}</DataBoxHeading>
                    <DataBoxText>{data.leftside.text}</DataBoxText>
                  </>
                ) : (
                  <>
                    <DataBoxHeading>&nbsp;</DataBoxHeading>
                    <DataBoxText>&nbsp;</DataBoxText>
                  </>
                )}
              </DataBox>

              <MainLine />

              <DataBox align={rightAlign}>
                {data.rightside ? (
                  <>
                    <DataBoxHeading>{data.rightside.heading}</DataBoxHeading>
                    {data.rightside.paragraphone ||
                    data.rightside.paragraphtwo ? (
                      <>
                        <DataBoxText>{data.rightside.paragraphone}</DataBoxText>
                        <DataBoxText>{data.rightside.paragraphtwo}</DataBoxText>
                      </>
                    ) : (
                      <DataBoxText>{data.rightside.text}</DataBoxText>
                    )}
                  </>
                ) : (
                  <>
                    <DataBoxHeading>&nbsp;</DataBoxHeading>
                    <DataBoxText>&nbsp;</DataBoxText>
                  </>
                )}
              </DataBox>
            </AboutSectionChild>
          );
        })}
      </AboutSection>
    </PageWrpr>
  );
}

export default AboutPage;
