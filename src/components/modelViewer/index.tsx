"use client";

import { ModelViewerProps } from "@/types/globalTypes";
import "@google/model-viewer/lib/model-viewer";

function ModelViewer({
  src,
  alt = "3D model",
  autoRotate = true,
  cameraControls = true,
  ar = false,
  className = "",
  width = "100px",
  height = "100%",
}: ModelViewerProps) {
  return (
    <model-viewer
      src={src}
      alt={alt}
      auto-rotate={autoRotate}
      camera-controls={cameraControls}
      ar={ar}
      style={{ width, height }}
      class={className}
      disable-zoom
      camera-orbit="0deg 90deg auto"
      min-camera-orbit="auto 90deg auto"
      max-camera-orbit="auto 90deg auto"
    />
  );
}

export default ModelViewer;
