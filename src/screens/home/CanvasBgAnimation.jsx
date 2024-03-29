import React, { useEffect, useRef } from "react";

const CanvasBgAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const col = (x, y, r, g, b) => {
      context.fillStyle = `rgb(${r},${g},${b})`;
      context.fillRect(x, y, 1, 1);
    };

    const R = (x, y, t) =>
      Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
    const G = (x, y, t) =>
      Math.floor(
        192 +
          64 *
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    const B = (x, y, t) =>
      Math.floor(
        192 +
          64 *
            Math.sin(
              5 * Math.sin(t / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
            )
      );

    let t = 0;

    const run = () => {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t = t + 0.03;
      requestAnimationFrame(run);
    };

    run();

    // Clean up the animation when the component unmounts
    return () => cancelAnimationFrame(run);
  }, []);

  return (
    <canvas
      style={{height: '100%', width: '100%', scale: .1}}
      ref={canvasRef}
      width={32}
      height={32}
    />
  );
};

export default CanvasBgAnimation;
