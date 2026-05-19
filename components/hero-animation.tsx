"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

const vertexShader = `
varying vec3 vNormal;
varying vec3 vViewPos;
varying vec2 vUv;

void main(){
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
  vViewPos = -mvPos.xyz;
  gl_Position = projectionMatrix * mvPos;
}
`

const fragmentShader = `
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

varying vec3 vNormal;
varying vec3 vViewPos;
varying vec2 vUv;

// Simple HSV -> RGB used for subtle hue shifts
vec3 hsvToRgb(vec3 c){
  vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main(){
  vec3 N = normalize(vNormal);
  vec3 V = normalize(vViewPos);
  float fresnel = pow(1.0 - abs(dot(N, V)), 2.2);

  vec3 r = reflect(-V, N);
  float env = 0.5 + 0.5 * r.y;

  // Reduce aggressive hue shifts and slow the animation for a smoother blue flow
  float hue = fract(vUv.x * 0.2 + uTime * 0.03 + env * 0.15 + fresnel * 0.08);
  vec3 iridescent = hsvToRgb(vec3(hue, 0.32, 1.0));

  vec3 baseColor = mix(uColor1, uColor2, env * 0.9 + 0.05);
  baseColor = mix(baseColor, uColor3, fresnel * 0.6);

  // Blend less with the iridescent rainbow, favouring the blue base
  vec3 col = mix(baseColor, iridescent, 0.25 + fresnel * 0.18);

  float rimLight = pow(fresnel, 1.0);
  col += rimLight * vec3(0.45, 0.55, 0.9) * 0.6;

  float alpha = mix(0.6, 0.95, fresnel);
  gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
}
`

function makeRing(
  R: number, r: number,
  c1: string, c2: string, c3: string
) {
  const geo = new THREE.TorusGeometry(R, r, 64, 180)
  const mat = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color(c1) },
      uColor2: { value: new THREE.Color(c2) },
      uColor3: { value: new THREE.Color(c3) },
    },
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
  })
  return new THREE.Mesh(geo, mat)
}

export function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      premultipliedAlpha: false,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0) // fully transparent

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
    camera.position.set(0, 0.5, 4.5)
    camera.lookAt(0, 0, 0)

    const resize = () => {
      const w = canvas.parentElement?.offsetWidth ?? 400
      renderer.setSize(w, w, false)
    }
    resize()
    window.addEventListener("resize", resize)

    const group = new THREE.Group()
    scene.add(group)

    const rings = [
      // Cohesive blue-focused palettes for smooth flowing transitions
      makeRing(1.00, 0.082, "#2EA8FF", "#5FD0FF", "#00CFFD"),
      makeRing(1.00, 0.082, "#1E7BFF", "#4BAEFF", "#48D1FF"),
      makeRing(0.80, 0.068, "#2C9BFF", "#66C3FF", "#2ED0FF"),
      makeRing(0.63, 0.058, "#1A6EFF", "#3E9EFF", "#2AAEFF"),
      makeRing(0.63, 0.058, "#1B5CFF", "#4A88FF", "#36B8FF"),
    ]

    const rotations: [number, number, number][] = [
      [0, 0, 0],
      [Math.PI / 2, 0, 0],
      [Math.PI / 3, Math.PI / 6, 0],
      [Math.PI / 6, Math.PI / 3, Math.PI / 4],
      [-Math.PI / 5, Math.PI / 2.5, -Math.PI / 6],
    ]

    const spinSpeeds = [0.003, 0.005, 0.004, 0.006, -0.004]
    const spinAxes: ("x" | "y" | "z")[] = ["z", "z", "y", "x", "z"]

    rings.forEach((r, i) => {
      r.rotation.set(...rotations[i])
      group.add(r)
    })

    const clock = new THREE.Clock()
    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      group.rotation.y = t * 0.35
      group.rotation.x = Math.sin(t * 0.22) * 0.28 + 0.25
      group.rotation.z = Math.cos(t * 0.17) * 0.12

      rings.forEach((ring, i) => {
        ring.rotation[spinAxes[i]] += spinSpeeds[i]
        ;(ring.material as THREE.ShaderMaterial).uniforms.uTime.value = t + i * 0.7

        const pulse = Math.sin(t * 0.8 + i * 1.3) * 0.5 + 0.5
        const c1 = (ring.material as THREE.ShaderMaterial).uniforms.uColor1.value as THREE.Color
        const c2 = (ring.material as THREE.ShaderMaterial).uniforms.uColor2.value as THREE.Color
        c1.setRGB(0.05 + pulse * 0.15, 0.05 + (1 - pulse) * 0.1, 0.7 + pulse * 0.3)
        c2.setRGB(0.3 + (1 - pulse) * 0.3, 0.1 + pulse * 0.1, 0.6 + (1 - pulse) * 0.3)
      })

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative aspect-square w-full">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}