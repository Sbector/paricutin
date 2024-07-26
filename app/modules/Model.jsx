import { useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber"

export default function Model() {
  const ref = useRef();
  useFrame((_,delta)=> {
    ref.current.rotation.x += 0.05* delta
    ref.current.rotation.y += 0.05* delta
  })
  const url = "./models/paricutinWeb.glb";
  const gltf = useGLTF(url);
  console.log(gltf);

  return (
    <Suspense>
      <primitive
        ref = {ref}
        object={gltf.scene}
        position={[0, 0, 0]}
        scale={[10, 10, 10]}
      />
    </Suspense>
  );
}
