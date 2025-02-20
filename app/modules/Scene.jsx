'use client'
import { Canvas } from "@react-three/fiber";
import { TrackballControls } from "@react-three/drei";
import { ACESFilmicToneMapping } from "three";
import Paricutin from "./Paricutin";
import { Suspense } from "react";

console.log(Paricutin)
export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1.5] }}
      gl={{ toneMapping: ACESFilmicToneMapping, toneMappingExposure: 1 }}
    >
      <ambientLight intensity={4} />
      <directionalLight intensity={2} position={[2,2,1]} color={'#ffffff'}/>
      <directionalLight intensity={3} position={[-4,0,-1]} color={'#ffffff'}/>
      
      <TrackballControls
        target={[0, 0, 0]}
        minDistance={0.9}
        maxDistance={3}
        noPan
        rotateSpeed={4}
      />
      <Suspense>
        <Paricutin scale={[10, 10, 10]}/>
      </Suspense>
    </Canvas>
  );
}
