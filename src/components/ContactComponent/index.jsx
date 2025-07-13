"use client";
import React from "react";
import { ContactComponentWrpr, ContactHeader, ContactSubHeader } from "./style";
import { PrimaryButton } from "../Buttons";

function ContactComponent() {
  return (
    <ContactComponentWrpr>
      <ContactHeader>contact</ContactHeader>
      <ContactSubHeader>
        Get a free consultation and let's discuss how we can help you achieve
        your goals
      </ContactSubHeader>
      <PrimaryButton
        label="Write to us about your idea"
        onClick={() =>
          (window.location.href =
            "mailto:dhavaljprasad@gmail.com?subject=<yourname> would like to talk about <youridea>")
        }
      />
    </ContactComponentWrpr>
  );
}

export default ContactComponent;
