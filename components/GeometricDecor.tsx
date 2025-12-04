import React from 'react';

export const CirclePattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={`absolute fill-current ${className}`} aria-hidden="true">
    <circle cx="50" cy="50" r="50" />
  </svg>
);

export const SemiCircleRight: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 50 100" className={`absolute fill-current ${className}`} aria-hidden="true">
    <path d="M0 0 H50 A50 50 0 0 1 50 100 H0 V0 Z" transform="scale(-1, 1) translate(-50, 0)" /> 
    {/* Corrected path for semi circle logic visually */}
    <path d="M0,0 Q50,0 50,50 Q50,100 0,100 Z" />
  </svg>
);

export const QuarterCircleBottomLeft: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={`absolute fill-current ${className}`} aria-hidden="true">
    <path d="M0 100 V0 A100 100 0 0 1 100 100 Z" />
  </svg>
);