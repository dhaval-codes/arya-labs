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
        <AboutText>
          At Arya Labs, we operate at the intersection of design thinking and
          data science, redefining how people engage with digital technologies.
          Our diverse team of designers, engineers, and data scientists brings
          deep expertise in crafting purposeful, innovative solutions. We focus
          on understanding real human behavior—how users think, feel, and
          interact—and embed that understanding into every stage of product
          design and development. From concept to deployment, we build
          intelligent web and mobile applications powered by AI, tailored to
          create meaningful user experiences.
        </AboutText>
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
