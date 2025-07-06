"use client";
import React, { useState } from "react";
import { Box, Container, Grid } from "./style";

// Dynamic layout calculation function
const calculateDynamicLayout = (
  expandedIdx,
  gridCols,
  gridRows,
  totalBoxes = 6
) => {
  const layout = {};

  // Calculate expanded box position (2x2 span)
  const expandedRow = Math.floor(expandedIdx / gridCols) + 1;
  const expandedCol = (expandedIdx % gridCols) + 1;

  // Ensure expanded box doesn't overflow grid
  const maxExpandedRow = Math.min(expandedRow, gridRows - 1);
  const maxExpandedCol = Math.min(expandedCol, gridCols - 1);

  // Set expanded box grid-area (spans 2x2)
  layout[expandedIdx] = `${maxExpandedRow} / ${maxExpandedCol} / ${
    maxExpandedRow + 2
  } / ${maxExpandedCol + 2}`;

  // Calculate positions for contracted boxes
  let currentRow = 1;
  let currentCol = 1;

  for (let i = 0; i < totalBoxes; i++) {
    if (i === expandedIdx) continue; // Skip expanded box

    // Check if current position conflicts with expanded box
    const isInExpandedArea =
      currentRow >= maxExpandedRow &&
      currentRow < maxExpandedRow + 2 &&
      currentCol >= maxExpandedCol &&
      currentCol < maxExpandedCol + 2;

    if (isInExpandedArea) {
      // Move to next available position
      currentCol++;
      if (currentCol > gridCols) {
        currentCol = 1;
        currentRow++;
      }

      // Check again after moving
      const stillInExpandedArea =
        currentRow >= maxExpandedRow &&
        currentRow < maxExpandedRow + 2 &&
        currentCol >= maxExpandedCol &&
        currentCol < maxExpandedCol + 2;

      if (stillInExpandedArea) {
        currentCol++;
        if (currentCol > gridCols) {
          currentCol = 1;
          currentRow++;
        }
      }
    }

    // Ensure we don't exceed grid bounds
    if (currentRow > gridRows) {
      currentRow = gridRows;
      currentCol = gridCols;
    }

    layout[i] = `${currentRow} / ${currentCol} / ${currentRow + 1} / ${
      currentCol + 1
    }`;

    // Move to next position
    currentCol++;
    if (currentCol > gridCols) {
      currentCol = 1;
      currentRow++;
    }
  }

  return layout;
};

// Get responsive layouts
const getResponsiveLayout = (expandedIdx) => {
  return {
    desktop: calculateDynamicLayout(expandedIdx, 3, 3),
    tablet: calculateDynamicLayout(expandedIdx, 2, 4),
    mobile: calculateDynamicLayout(expandedIdx, 1, 6),
  };
};

const BentoBox = ({ items }) => {
  const [expandedIdx, setExpandedIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const layouts = getResponsiveLayout(expandedIdx);

  const handleBoxClick = (idx) => {
    if (idx === expandedIdx) return; // Don't animate if same box

    // Trigger transition animation
    setIsTransitioning(true);

    // Change expanded index
    setExpandedIdx(idx);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600); // Match animation duration
  };

  return (
    <Container>
      <Grid>
        {items.map((item, idx) => (
          <Box
            key={idx}
            expanded={expandedIdx === idx}
            isTransitioning={isTransitioning}
            onClick={() => handleBoxClick(idx)}
            gridArea={{
              desktop: layouts.desktop[idx],
              tablet: layouts.tablet[idx],
              mobile: layouts.mobile[idx],
            }}
          >
            {expandedIdx === idx ? item.expanded : item.contracted}
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default BentoBox;
