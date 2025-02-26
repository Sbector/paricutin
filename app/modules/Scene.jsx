'use client'
import { Canvas } from "@react-three/fiber";
import { Environment, TrackballControls } from "@react-three/drei";
import { ACESFilmicToneMapping } from "three";
import Paricutin from "./Paricutin";
import { Suspense } from "react";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1.5] }}
      gl={{ toneMapping: ACESFilmicToneMapping, toneMappingExposure: 1 }}
    >
      <ambientLight intensity={2} />
      <directionalLight intensity={0.1} position={[2,2,1]} color={'#ffffff'}/>
      <directionalLight intensity={0.2} position={[-4,0,-1]} color={'#ffffff'}/>

      <Environment preset="warehouse"/>
      
      <TrackballControls
        target={[0, 0, 0]}
        minDistance={1}
        maxDistance={3}
        noPan
        rotateSpeed={4}
      />
      <Suspense>
        <Paricutin scale={[10, 10, 10]} rotation={[2, 1, 0]}/>
      </Suspense>
    </Canvas>
  );
}
