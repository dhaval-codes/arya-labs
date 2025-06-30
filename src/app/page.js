"use client";

import AboutComponent from "@/components/AboutComponent/index.jsx";
import HeroComponent from "../components/HeroComponent/index.jsx";
import { PageWrpr } from "./style";

export default function Home() {
  return (
    <PageWrpr>
      <HeroComponent />
      <AboutComponent />
    </PageWrpr>
  );
}
