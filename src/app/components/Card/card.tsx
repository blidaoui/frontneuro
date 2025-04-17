"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const ZoomableImageCard = () => {
  const [scale, setScale] = useState(1); // For wheel zoom
  const [zoomed, setZoomed] = useState(false); // For hover zoom

  // Handle wheel-based zooming
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const newScale = e.deltaY > 0 ? scale * 0.95 : scale * 1.05;
    setScale(Math.min(Math.max(0.5, newScale), 2)); // Limit scale between 0.5x and 2x
  };

  // Toggle hover zoom
  const handleMouseEnter = () => setZoomed(true);
  const handleMouseLeave = () => setZoomed(false);

  return (
    <StyledWrapper>
      <div
        className="zoom-container"
        onWheel={handleWheel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transform: `scale(${scale})` }} // Apply wheel zoom
      >
        <div className={`zoom-image ${zoomed ? "zoomed" : ""}`}>
          <Image
            src="/images/logoabout.png" // Replace with your image path
            alt="Zoomable Image"
            width={300}
            height={400}
          />
        </div>
      </div>
    </StyledWrapper>
  );
};

// Styled-components for the card
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 2rem;

  .zoom-container {
    width: 300px;
    height: 300px;
    overflow: hidden;
    transition: transform 0.3s ease;
    cursor: zoom-in;
  }

  .zoom-image {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .zoom-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .zoom-image.zoomed img {
    transform: scale(1.25); // Hover zoom effect (1.25x)
  }
`;

export default ZoomableImageCard;
