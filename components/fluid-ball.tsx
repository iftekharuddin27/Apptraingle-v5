"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Sphere } from "@react-three/drei"
import * as THREE from "three"

function FluidScene() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    
    // 1. Follow the cursor just a little bit (tightly constrained position)
    const targetX = state.pointer.x * 0.5
    const targetY = state.pointer.y * 0.5
    
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.08)
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.08)

    // 2. Rotate to face the cursor
    const targetRotX = (state.pointer.y * Math.PI) / 3
    const targetRotY = (state.pointer.x * Math.PI) / 3

    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.08)
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.08)
    
    // 3. Keep it slowly spinning on its own axis so the fluid ripples
    meshRef.current.rotation.z += 0.002
  })

  return (
    <Sphere ref={meshRef} args={[1.4, 64, 64]}>
      <MeshDistortMaterial
        color="#29b3ff"
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        metalness={0.6}
        roughness={0.1}
        distort={0.3} // Keeps the liquid surface shifting
        speed={2}
      />
    </Sphere>
  )
}

export function FluidBallAnimation() {
  return (
    <div className="relative flex aspect-square w-full items-center justify-center overflow-visible">
      {/* Deep space glow behind the ball */}
      <div className="absolute h-64 w-64 rounded-full bg-primary/20 blur-[100px] pointer-events-none" />

      {/* 3D Canvas Context */}
      <Canvas camera={{ position: [0, 0, 4] }} className="pointer-events-auto cursor-pointer">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#29b3ff" />
        
        <FluidScene />
      </Canvas>
    </div>
  )
}