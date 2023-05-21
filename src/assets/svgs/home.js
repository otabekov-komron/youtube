import React from "react";

const HomeSVG = (props) => {
  return (
    <svg
    color="red"
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      fill={props.color}
      class="style-scope yt-icon"
      style={{
        pointerEvents: "none",
        display: "block",
        width: "24px",
      }}
    >
      <g class="style-scope yt-icon">
        <path
          d="M4,10V21h6V15h4v6h6V10L12,3Z"
          class="style-scope yt-icon"
        ></path>
      </g>
    </svg>
  );
};

export default HomeSVG;
