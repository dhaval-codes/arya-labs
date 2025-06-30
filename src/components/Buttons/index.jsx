"use client";

import { PrimaryButtonText, PrimaryButtonWrpr } from "./style";

export const PrimaryButton = ({ label, onClick }) => {
  return (
    <PrimaryButtonWrpr onClick={onClick}>
      <PrimaryButtonText>{label}</PrimaryButtonText>
    </PrimaryButtonWrpr>
  );
};
