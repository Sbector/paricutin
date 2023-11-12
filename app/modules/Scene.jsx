'use client'
import { Canvas } from "@react-three/fiber";
import { TrackballControls } from "@react-three/drei";
import { ACESFilmicToneMapping } from "three";
import Model from "./Model";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1.5] }}
      gl={{ toneMapping: ACESFilmicToneMapping, toneMappingExposure: 2.5 }}
    >
      <ambientLight intensity={3} />
      <Model />
      <TrackballControls
        target={[0, 0, 0]}
        minDistance={0.9}
        maxDistance={3}
        noPan
        rotateSpeed={4}
      />
    </Canvas>
  );
}
