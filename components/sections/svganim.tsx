"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AnimatedNameProps {
  width?: number; // optional width prop
}

export default function AnimatedName({ width = 480 }: AnimatedNameProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Calculate height based on the original ratio 480:200
  const height = (width * 200) / 480;

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Create gradient for stroke
    const gradient = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "linearGradient"
    );
    gradient.setAttribute("id", "gradient");
    gradient.setAttribute("x1", "0%");
    gradient.setAttribute("y1", "0%");
    gradient.setAttribute("x2", "100%");
    gradient.setAttribute("y2", "100%");

    const stop1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "stop"
    );
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("stop-color", "#4F46E5");
    gradient.appendChild(stop1);

    const stop2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "stop"
    );
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("stop-color", "#EC4899");
    gradient.appendChild(stop2);

    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    defs.appendChild(gradient);
    svg.prepend(defs);

    // Animate paths
    const paths = svg.querySelectorAll("path");
    paths.forEach((path) => {
      const length = (path as SVGPathElement).getTotalLength();
      (path as SVGPathElement).style.strokeDasharray = `${length}`;
      (path as SVGPathElement).style.strokeDashoffset = `${length}`;
      (path as SVGPathElement).style.stroke = "url(#gradient)";
      (path as SVGPathElement).style.fill = "#000000"; // ensure no fill
      (path as SVGPathElement).style.strokeWidth = "2";
    });

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 2,
      stagger: 0.3,
    });
  }, []);

  return (
    <div
      className="flex justify-center items-center h-fit w-fit p-1 px-3 
  rounded-[10px] 
  bg-white/50 
  backdrop-blur-[15px] 
  // shadow-[0_0_0_4px_rgba(255,255,255,0.25)] 
  opacity-100"
    >
      <svg
        ref={svgRef}
        width={width}
        height={height}
        viewBox="0 0 484 199"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillOpacity="1.00" stroke="None">
          <path d="M64.00 0.00L57.00 0.00C46.49 12.40 48.09 31.68 42.98 46.98C35.37 79.90 28.04 112.87 20.93 145.93C21.00 159.88 4.29 182.48 20.00 191.00C34.21 187.44 40.77 170.78 51.75 161.75C60.94 151.06 69.84 139.82 80.00 130.00C84.67 149.74 86.76 170.82 94.77 189.23C106.17 197.10 111.73 179.92 106.00 172.00C104.16 151.79 93.26 131.27 95.70 111.70C104.68 105.92 101.23 88.95 89.00 95.00C85.47 78.62 82.06 62.22 77.99 46.01C73.06 30.97 74.76 11.96 64.00 0.00M38.00 153.00C41.89 117.88 53.84 81.75 60.00 46.00C66.47 66.32 70.50 88.64 74.66 109.68C63.31 124.62 48.95 138.01 38.00 153.00Z" />
        </g>
        <g fill="none" fillOpacity="1.00" stroke="None">
          <path d="M163.00 154.00C154.79 160.41 146.68 166.91 138.70 173.70C124.30 177.94 132.47 199.22 144.75 187.75C176.34 160.71 211.24 136.14 241.00 108.00C241.12 96.61 229.28 90.07 224.25 80.75C204.73 56.19 185.67 31.35 166.25 6.75C149.53 -4.33 152.78 22.08 153.00 32.00C153.00 61.33 153.00 90.67 153.00 120.00C154.66 131.43 147.28 151.99 163.00 154.00M169.00 34.00C187.09 57.89 206.12 81.03 224.00 105.00C204.10 119.49 185.71 136.26 166.00 151.00C171.28 113.24 165.37 71.84 169.00 34.00Z" />
        </g>
        <g fill="none" fillOpacity="1.00" stroke="None">
          <path d="M303.00 53.00C312.53 58.02 321.87 63.19 330.92 69.08C337.52 74.46 358.37 83.70 353.92 67.08C328.91 48.76 299.70 35.42 273.08 18.92C263.76 15.62 254.90 3.66 244.75 7.75C235.25 19.07 254.64 23.48 261.30 28.70C270.65 33.55 279.37 39.94 289.00 44.00C289.00 80.33 289.00 116.67 289.00 153.00C279.22 157.31 270.10 163.48 260.70 168.70C253.99 174.42 235.17 177.59 241.75 189.25C251.36 196.08 260.77 182.93 269.92 179.92C296.85 163.81 324.98 149.46 351.25 132.25C358.72 116.27 336.75 121.33 330.23 128.23C321.35 133.88 312.23 138.93 303.00 144.00C303.00 113.67 303.00 83.33 303.00 53.00Z" />
        </g>
        <g fill="none" fillOpacity="1.00" stroke="None">
          <path d="M391.00 177.00C396.45 161.50 402.22 146.14 407.69 130.69C412.74 115.61 423.41 99.52 412.77 84.23C405.65 70.31 400.26 55.68 393.32 41.68C385.82 29.96 385.27 7.34 370.00 5.00C359.30 15.42 374.40 28.62 377.07 39.93C382.10 52.05 387.42 64.05 393.07 75.93C397.57 88.14 407.72 100.74 398.32 113.32C394.24 126.32 388.80 138.75 384.78 151.78C382.18 163.87 370.09 177.46 375.92 189.08C390.65 195.26 408.82 190.50 425.00 192.00C441.50 190.83 459.64 194.41 475.08 190.08C484.92 170.85 453.03 178.30 442.00 177.00C425.00 177.00 408.00 177.00 391.00 177.00Z" />
        </g>
        {/* Your paths here */}
      </svg>
    </div>
  );
}
