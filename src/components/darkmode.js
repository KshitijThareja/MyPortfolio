"use client";
import React from "react";
import "../app/styles.scss";
import "../app/globals.scss";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
const DarkMode = () => {
  const { isDarkmode, toggleTheme } = useTheme();
  return (
    <div className="wrap">
      <input
        checked={isDarkmode === true}
        type="checkbox"
        className="mode-toggle"
        id="checkbox"
        onChange={toggleTheme}
      />
      <label className="mode-toggle-label" htmlFor="checkbox">
        <svg
          width="50"
          height="30"
          viewBox="0 0 300 180"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bg-night">
              <stop className="bg-stop-start" offset="0%" />
              <stop className="bg-stop-end" offset="100%" />
            </linearGradient>
            <filter id="glow">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="8"
                floodColor="#ffffff"
                floodOpacity="0.75"
              />
            </filter>
            <filter id="glow-mini">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="0.5"
                floodColor="#ffffff"
                floodOpacity="0.5"
              />
            </filter>
          </defs>
          <rect
            className="bg"
            width="300"
            height="180"
            rx="90"
            ry="90"
            fill="url(#bg-night)"
          />
          <circle
            className="source"
            cx="0"
            cy="0"
            r="70"
            fill="#ffffff"
            style={{ filter: "url(#glow)" }}
          />
          <g className="stars">
            <circle
              className="star-1"
              cx="190"
              cy="50"
              r="4"
              fill="#ffffff"
              style={{ filter: "url(#glow-mini)" }}
            />
            <circle
              className="star-2"
              cx="250"
              cy="70"
              r="4"
              fill="#ffffff"
              style={{ filter: "url(#glow-mini)" }}
            />
            <circle
              className="star-3"
              cx="220"
              cy="130"
              r="6"
              fill="#ffffff"
              style={{ filter: "url(#glow-mini)" }}
            />
          </g>
        </svg>
      </label>
    </div>
  );
};
export default DarkMode;
