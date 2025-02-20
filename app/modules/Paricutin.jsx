/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Paricutin(props) {

    const mesh = useRef()

    useEffect(()=>{
        const material = mesh.current.material
        material.roughness = 1
        material.metalness = 0.2
    },[])

    const { nodes, materials } = useGLTF('./models/paricutinWeb.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                ref={mesh}
                castShadow
                receiveShadow
                geometry={nodes['9k'].geometry}
                material={materials.Paricutin_Low}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    )
}

useGLTF.preload('./models/paricutinWeb.glb')
