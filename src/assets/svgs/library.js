import React from "react";

const Library = ({children}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      color={children}
      class="style-scope yt-icon"
      style={{
        pointerEvents: "none",
        display: "block",
        width: "100%",
        height: "100%",
      }}
    >
      <g class="style-scope yt-icon">
        <path
          d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"
          class="style-scope yt-icon"
        ></path>
      </g>
    </svg>
  );
};

export default Library;
