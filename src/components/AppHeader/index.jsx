"use client";
import React from "react";
import { HeaderWrpr, Logo, NavOption, NavOptionsWrpr } from "./style";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "@/utils/themeContext";
import { useRouter } from "next/navigation";

const NavOptions = [
  { label: "home", endpoint: "/", type: "route" },
  { label: "about", endpoint: "/about", type: "route" },
  { label: "work", endpoint: "/work", type: "route" },
  { label: "contact", endpoint: "/contact", type: "route" },
];

function AppHeader() {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  return (
    <HeaderWrpr>
      <Logo>Arya Labs</Logo>
      <NavOptionsWrpr>
        {NavOptions.map((option) => (
          <NavOption
            key={option.label}
            onClick={() => router.push(option.endpoint)}
          >
            {option.label}
          </NavOption>
        ))}
        <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
          {theme === "light" ? (
            <MdOutlineDarkMode size={24} />
          ) : (
            <MdOutlineLightMode size={24} color="#fff" />
          )}
        </div>
      </NavOptionsWrpr>
    </HeaderWrpr>
  );
}

export default AppHeader;
