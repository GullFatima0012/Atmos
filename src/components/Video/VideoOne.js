"use client";
import React from "react";

export default function VideoOne({ embedHtml }) {
  return (
    <div
      className="popup_video position-relative ratio ratio-16x9"
      dangerouslySetInnerHTML={{
        __html: embedHtml,
      }}
    />
  );
}
