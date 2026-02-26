// import LiquidChrome from "../components/backgrounds/LiquidChrome";

// import Beams from "./backgrounds/Bims";

// import Aurora from "./backgrounds/Aurora";

import Silk from "./backgrounds/Silk";

const Background = () => {
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

    <div className="fixed inset-0 z-0 overflow-hidden">
      <Silk
        speed={4}
        scale={0.6}
        color="#364143ff"
        noiseIntensity={2.0}
        rotation={0}
      />
    </div>
  );
};

export default Background;
