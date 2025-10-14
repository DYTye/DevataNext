'use client'

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'

function Model({ glbsrc }) {
  const { scene } = useGLTF(glbsrc)
  const ref = useRef()

  // Biar objek ke tengah
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    scene.position.sub(center)
  }, [scene])

  // Animasi rotasi
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1 // putar pelan
    }
  })

  return <primitive ref={ref} object={scene} scale={1.5} />
}

export default function ModelViewer({ className, glbsrc }) {
  return (
    <div className={`w-full h-[500px] bg-transparent ${className || ''}`}>
      <Canvas camera={{ position: [7, 2, 7], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Model glbsrc={glbsrc} />
        <OrbitControls target={[0, 0, 0]} enableZoom />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
