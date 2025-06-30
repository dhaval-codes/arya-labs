"use client";
import React from "react";
import { HeaderWrpr, Logo, NavOption, NavOptionsWrpr } from "./style";

const NavOptions = [
  { label: "home", endpoint: "/", type: "route" },
  { label: "about", endpoint: "/about", type: "route" },
  { label: "work", endpoint: "/work", type: "route" },
  { label: "contact", endpoint: "/contact", type: "route" },
];

function AppHeader() {
  return (
    <HeaderWrpr>
      <Logo>Arya Labs</Logo>
      <NavOptionsWrpr>
        {NavOptions.map((option) => (
          <NavOption key={option.label}>{option.label}</NavOption>
        ))}
      </NavOptionsWrpr>
    </HeaderWrpr>
  );
}

export default AppHeader;
