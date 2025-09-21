"use client";

import { useTint } from "@/hooks/useTint";
import { usePPF } from "@/hooks/usePpf";
import { ModelViewerElement, ModelViewerProps } from "@/types/globalTypes";
import "@google/model-viewer/lib/model-viewer";
import { useEffect, useRef, useState } from "react";

function ModelViewer({
  src,
  alt = "3D model",
  autoRotate = true,
  cameraControls = true,
  ar = false,
  className = "",
}: ModelViewerProps) {
  const modelRef = useRef<ModelViewerElement | null>(null);
  const { opacity } = useTint();
  const { color } = usePPF();
  const [loading, setLoading] = useState(true);

  const isHouse = src.includes("house");

  useEffect(() => {
    setLoading(true);
    const viewer = modelRef.current;

    if (!viewer) return;

    const handleLoad = () => setLoading(false);
    viewer.addEventListener("load", handleLoad);

    return () => {
      viewer.removeEventListener("load", handleLoad);
    };
  }, [src]);

  useEffect(() => {
    const viewer = modelRef.current;

    const applyMaterials = () => {
      const materials = viewer?.model?.materials;
      if (!materials) return;

      const tintMat = materials.find((mat) =>
        ["Car_Glasses", "House_Glasses", "commercial_glass"].includes(mat.name)
      );

      if (tintMat) {
        tintMat.pbrMetallicRoughness.setBaseColorFactor([0, 0, 0, opacity]);
      }
      const paintMat = materials.find((mat) => mat.name === "Car_Paint");
      if (paintMat) {
        paintMat.pbrMetallicRoughness.setBaseColorFactor(color);
      }
    };

    const interval = setInterval(() => {
      if (
        viewer?.model &&
        Array.isArray(viewer.model.materials) &&
        viewer.model.materials.length > 0
      ) {
        applyMaterials();
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [opacity, color]);

  return (
    <div className="relative w-fit h-fit">
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#F2F2F2] rounded-lg backdrop-blur-sm">
          <span className="animate-spin w-10 h-10 border-4 border-[#E52323] border-t-transparent rounded-full"></span>
        </div>
      )}

      <model-viewer
        key={src}
        ref={modelRef}
        src={src}
        alt={alt}
        auto-rotate={autoRotate}
        camera-controls={cameraControls}
        ar={ar}
        class={className}
        disable-zoom
        camera-orbit={isHouse ? "0deg 90deg 250m" : "0deg 90deg 40m"}
        min-camera-orbit="auto 90deg 25m"
        max-camera-orbit={isHouse ? "auto 90deg 250m" : "auto 90deg 50m"}
      />
    </div>
  );
}

export default ModelViewer;
