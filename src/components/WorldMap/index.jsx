"use client";
import { useEffect, useRef } from "react";
import { MatrixEarthWrpr } from "./style";
import { useTheme } from "styled-components";

export default function MatrixDotMap() {
  const canvasRef = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = new Image();
    image.src = "/landmask.png";
    image.crossOrigin = "Anonymous";

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      const imageData = ctx.getImageData(0, 0, image.width, image.height);
      const { data } = imageData;

      const dotSize = 10;
      const gap = 30;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = theme.accentPrimary;

      for (let y = 0; y < image.height; y += gap) {
        for (let x = 0; x < image.width; x += gap) {
          const index = (y * image.width + x) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];
          const brightness = (r + g + b) / 3;

          if (brightness > 128) {
            ctx.beginPath();
            ctx.arc(x, y, dotSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };
  }, [theme]);

  return (
    <MatrixEarthWrpr>
      <canvas ref={canvasRef} />
    </MatrixEarthWrpr>
  );
}
