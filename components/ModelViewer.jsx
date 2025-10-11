'use client'

import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'

function Model() {
  const { scene } = useGLTF('/car/source/car_glb.glb')
  React.useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    scene.position.sub(center)
  }, [scene])

  return <primitive object={scene} scale={1.5} />
}

export default function ModelViewer({ className }) {
  return (
    <div className="w-full h-[500px] bg-transparant">
      <Canvas camera={{ position: [3, 3, 3], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Model />
        <OrbitControls target={[0, 0, 0]} enableZoom />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
