// import LiquidChrome from "../components/backgrounds/LiquidChrome";

// import Beams from "./backgrounds/Bims";

// import Aurora from "./backgrounds/Aurora";

import { useState, useEffect } from "react";
import Silk from "./backgrounds/Silk";

const Background = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    //  <div className="fixed inset-0 z-0 overflow-hidden">
    //    <LiquidChrome
    //      baseColor={[0.05, 0.08, 0.09]}
    //      speed={0.24}
    //      amplitude={0.3}
    //      interactive={true}
    //      style={{ width: "100%", height: "100%" }}
    //    />
    // </div>
    //    <div className="fixed inset-0 z-0 overflow-hidden">
    //  <Beams
    //    beamWidth={3}
    //    beamHeight={30}
    //    beamNumber={20}
    //    lightColor="#b3ffd4"
    //    speed={2}
    //    noiseIntensity={3.25}
    //    scale={0.2}
    //    rotation={30}
    //  />
    //   </div>

    // <div className="fixed inset-0 z-0 overflow-hidden">
    //   <Aurora
    //     colorStops={["#66ffb0", "#a3f0c4", "#29e6ff"]}
    //     blend={2.0}
    //     amplitude={3.0}
    //     speed={1}
    //   />
    // </div>

    <div className="fixed inset-0 z-0 overflow-hidden bg-[#24292b]">
      {isMobile ? (
        // Static styling for mobile devices:
        // A lightweight CSS animation with floating blurred gradients (0 performance impact)
        <div className="absolute inset-0 overflow-hidden bg-[#1e2425]">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e2425] to-[#2a3435]" />

          {/* Animated Blob 1 */}
          <div
            className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen opacity-30 filter blur-[60px] animate-float-slow"
            style={{ backgroundColor: '#4a6b6d' }}
          />

          {/* Animated Blob 2 */}
          <div
            className="absolute top-[40%] right-[-20%] w-[70vw] h-[70vw] rounded-full mix-blend-screen opacity-20 filter blur-[80px] animate-float-slower"
            style={{ backgroundColor: '#365355' }}
          />

          {/* Animated Blob 3 */}
          <div
            className="absolute bottom-[-20%] left-[20%] w-[80vw] h-[80vw] rounded-full mix-blend-screen opacity-25 filter blur-[70px] animate-float-slowest"
            style={{ backgroundColor: '#2d4547' }}
          />
        </div>
      ) : (
        // WebGL animated background for desktop devices
        <Silk
          speed={4}
          scale={0.6}
          color="#364143ff"
          noiseIntensity={2.0}
          rotation={0}
        />
      )}
    </div>
  );
};

export default Background;
