"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type Apptriangle3DLogoProps = {
  className?: string;
};

type Point = [number, number];

const LOGO_PIECES: Point[][] = [
  [
    [-2.02, -1.15],
    [-1.16, -1.15],
    [0.45, 1.08],
    [-0.01, 1.72]
  ],
  [
    [0.73, 0.65],
    [2.02, -1.15],
    [1.13, -1.15],
    [0.3, 0.02]
  ],
  [
    [-0.01, -0.39],
    [0.55, -1.15],
    [-0.53, -1.15]
  ]
];

const createShapeGeometry = (points: Point[]) => {
  const shape = new THREE.Shape();
  shape.moveTo(points[0][0], points[0][1]);

  for (let index = 1; index < points.length; index += 1) {
    shape.lineTo(points[index][0], points[index][1]);
  }

  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.28,
    bevelEnabled: true,
    bevelSegments: 2,
    bevelSize: 0.025,
    bevelThickness: 0.035,
    curveSegments: 1
  });

  geometry.translate(0, 0, -0.14);
  geometry.computeVertexNormals();

  return geometry;
};

export function Apptriangle3DLogo({ className = "" }: Apptriangle3DLogoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) {
      return undefined;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x05070b, 7, 12);

    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0.08, 5.8);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

    const logoGroup = new THREE.Group();
    logoGroup.rotation.set(-0.04, -0.34, 0);
    scene.add(logoGroup);

    const markMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x000000,
      emissiveIntensity: 0,
      metalness: 0.08,
      roughness: 0.28
    });

    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const geometries = LOGO_PIECES.map(createShapeGeometry);

    geometries.forEach((geometry) => {
      const mesh = new THREE.Mesh(geometry, markMaterial);
      mesh.castShadow = false;
      mesh.receiveShadow = false;
      logoGroup.add(mesh);
    });

    const particleCount = window.innerWidth < 768 ? 90 : 160;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let index = 0; index < particleCount; index += 1) {
      const stride = index * 3;
      particlePositions[stride] = (Math.random() - 0.5) * 8.4;
      particlePositions[stride + 1] = (Math.random() - 0.5) * 4.8;
      particlePositions[stride + 2] = -1.4 - Math.random() * 4.4;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.018,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    scene.add(new THREE.AmbientLight(0xffffff, 0.32));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.25);
    keyLight.position.set(2.4, 3, 4);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xffffff, 0.6, 7);
    rimLight.position.set(-2.2, -1.2, 2.8);
    scene.add(rimLight);

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      const isCompact = width < 640;

      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.position.z = isCompact ? 6.65 : 6.75;
      logoGroup.scale.setScalar(isCompact ? 0.82 : 0.92);
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const clock = new THREE.Clock();
    let animationFrame = 0;

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      logoGroup.position.y = Math.sin(elapsed * 0.9) * 0.09;
      logoGroup.rotation.y = -0.34 + elapsed * 0.22;
      logoGroup.rotation.x = -0.04 + Math.sin(elapsed * 0.62) * 0.035;

      particles.rotation.y = elapsed * 0.025;
      particles.rotation.x = Math.sin(elapsed * 0.15) * 0.04;

      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();

      geometries.forEach((geometry) => geometry.dispose());
      markMaterial.dispose();
      glowMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      role="img"
      aria-label="Animated 3D Apptriangle logo"
    >
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden />
    </div>
  );
}