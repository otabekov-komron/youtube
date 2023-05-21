import React from "react";

const SubSVG = ({children}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      class="style-scope yt-icon"
      fill={children}
      style={{
        pointerEvents: "none",
        display: "block",
        width: "100%",
        height: "100%",
      }}
    >
      <g class="style-scope yt-icon">
        <path
          d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
          class="style-scope yt-icon"
        ></path>
      </g>
    </svg>
  );
};

export default SubSVG;
