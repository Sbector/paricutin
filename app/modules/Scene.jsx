'use client'
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer, TrackballControls } from "@react-three/drei";
import { ACESFilmicToneMapping } from "three";
import Paricutin from "./Paricutin";
import { Suspense } from "react";
import Placeholder from "./PlaceHolder";
import { Color } from "three"

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1.5] }}
      gl={{ toneMapping: ACESFilmicToneMapping, toneMappingExposure: 1 }}
    >
      <color args={['#18181b']} attach="background" />
      <ambientLight intensity={2} />
      {/* <directionalLight intensity={0.1} position={[2, 2, 1]} color={'#ffffff'} /> */}
      {/* <directionalLight intensity={0.3} position={[-4, 0, -1]} color={'#ffffff'} /> */}

      <Environment
        // background
        // preset="warehouse"
        resolution={ 32 }
        // backgroundBlurriness={0}
        backgroundIntensity={0.1}
      >
        <color args={['#000000']} attach="background" />
        <Lightformer 
        position-z={-30} 
        scale={40} 
        intensity={4} 
        form="ring"/>
        <Lightformer 
        position-z={30} 
        scale={40} 
        intensity={4} 
        form="ring"/>
      </Environment>

      <TrackballControls
        target={[0, 0, 0]}
        minDistance={1.5}
        maxDistance={3}
        noPan
        rotateSpeed={2.5}
      />
      <Suspense fallback={<Placeholder />}>
        <Paricutin />
      </Suspense>
    </Canvas>
  );
}
