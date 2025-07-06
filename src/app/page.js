"use client";

import { PageWrpr } from "./style";
import AboutComponent from "../components/AboutComponent/index.jsx";
import HeroComponent from "../components/HeroComponent/index.jsx";
import WorkComponent from "../components/WorkComponent/index.jsx";

export default function Home() {
  return (
    <PageWrpr>
      <HeroComponent />
      <AboutComponent />
      <WorkComponent />
    </PageWrpr>
  );
}
