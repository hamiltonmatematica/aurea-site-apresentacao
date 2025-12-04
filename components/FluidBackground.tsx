
import React from 'react';

const FluidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#150f1d]">
      {/* 
        Geometric Background based on PDF Page 17/26 
        Solid geometric shapes (Golden Ratio circles) in Electric Blue and Tangerine.
      */}
      
      {/* Large Electric Blue Circle - Bottom Right */}
      <div 
        className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-[#2000f5] rounded-full mix-blend-normal opacity-100"
      />

      {/* Large Tangerine Circle - Top Left/Center */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] bg-[#ff5b05] rounded-full mix-blend-normal opacity-100"
      />

      {/* Smaller Intersecting Blue Circle - Top Right/Center */}
      <div 
        className="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] bg-[#2000f5] rounded-full mix-blend-screen opacity-80 hidden md:block"
        style={{ transform: 'translate(50%, -50%)' }}
      />
    </div>
  );
};

export default FluidBackground;
