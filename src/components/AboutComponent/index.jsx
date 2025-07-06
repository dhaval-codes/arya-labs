"use client";
import React from "react";
import {
  AboutComponentWrpr,
  AboutContent,
  AboutHeader,
  AboutImageWrpr,
  AboutText,
  ButtonWrpr,
} from "./style";
import { PrimaryButton } from "../Buttons";
import { AboutData } from "../../data/landingpage";

function AboutComponent() {
  return (
    <AboutComponentWrpr>
      <AboutHeader>about</AboutHeader>
      <AboutContent>
        <AboutImageWrpr>
          <img
            src="https://res.cloudinary.com/dli14hm5i/image/upload/v1751308965/WhatsApp_Image_2025-07-01_at_00.11.38_zxhda4.jpg"
            alt="About"
          />
        </AboutImageWrpr>
        <AboutText dangerouslySetInnerHTML={{ __html: AboutData }} />
      </AboutContent>
      <ButtonWrpr>
        <PrimaryButton
          label="Learn More"
          onClick={() => alert("Button Clicked")}
        />
      </ButtonWrpr>
    </AboutComponentWrpr>
  );
}

export default AboutComponent;
