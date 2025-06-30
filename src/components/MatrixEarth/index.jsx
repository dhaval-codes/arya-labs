"use client";
import { useEffect, useRef } from "react";
import Globe from "globe.gl";
import { MatrixEarthWrpr } from "./style";
import { useTheme } from "styled-components";

export default function MatrixDotEarth() {
  const globeRef = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    if (!globeRef.current) return;

    let globeInstance;

    const resizeObserver = new ResizeObserver(() => {
      if (globeInstance && globeRef.current) {
        const { offsetWidth: width, offsetHeight: height } = globeRef.current;
        globeInstance.width(width).height(height);
      }
    });

    resizeObserver.observe(globeRef.current);

    const landmask = new Image();
    landmask.src = "/landmask.png";
    landmask.crossOrigin = "Anonymous";

    landmask.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = landmask.width;
      canvas.height = landmask.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(landmask, 0, 0);

      const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      ).data;
      const points = [];

      const sampleRate = 25;

      for (let y = 0; y < canvas.height; y += sampleRate) {
        for (let x = 0; x < canvas.width; x += sampleRate) {
          const index = (y * canvas.width + x) * 4;
          const r = imageData[index];
          const g = imageData[index + 1];
          const b = imageData[index + 2];
          const brightness = (r + g + b) / 3;

          if (brightness > 128) {
            const lat = 90 - (y / canvas.height) * 180;
            const lng = (x / canvas.width) * 360 - 180;
            points.push({
              lat,
              lng,
              size: 0.4,
              color: theme.accentTertiary,
            });
          }
        }
      }

      globeInstance = Globe()(globeRef.current)
        .globeImageUrl(null)
        .backgroundColor("rgba(0, 0, 0, 0)")
        .showAtmosphere(false)
        .pointsData(points)
        .pointAltitude(0.01)
        .pointColor("color")
        .pointRadius("size")
        .pointResolution(4);

      // Set globe color from theme
      globeInstance.globeMaterial().color.set(theme.backgroundSecondary);

      const arcsData = [];
      const arcColors = [theme.accentPrimary, theme.accentSecondary];

      for (let i = 0; i < 25; i++) {
        const start = points[Math.floor(Math.random() * points.length)];
        let end = points[Math.floor(Math.random() * points.length)];

        while (start === end) {
          end = points[Math.floor(Math.random() * points.length)];
        }

        arcsData.push({
          startLat: start.lat,
          startLng: start.lng,
          endLat: end.lat,
          endLng: end.lng,
          color: arcColors[i % 2], // Alternate between primary and secondary
        });
      }

      globeInstance
        .arcsData(arcsData)
        .arcColor("color")
        .arcAltitude(() => Math.random() * 0.3)
        .arcStroke(1)
        .arcDashLength(0.2)
        .arcDashGap(1)
        .arcDashInitialGap(() => Math.random())
        .arcDashAnimateTime(4000);

      globeInstance.controls().autoRotate = true;
      globeInstance.controls().autoRotateSpeed = 0.6;

      // 🛑 Disable mouse controls
      const controls = globeInstance.controls();
      controls.enableZoom = false;
      controls.enableRotate = false;
      controls.enablePan = false;

      const { offsetWidth, offsetHeight } = globeRef.current;
      globeInstance.width(offsetWidth).height(offsetHeight);
    };

    return () => {
      resizeObserver.disconnect();
    };
  }, [theme]); // Add theme as dependency

  return <MatrixEarthWrpr ref={globeRef} />;
}
