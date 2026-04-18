import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars, Grid, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

/* ═══════════════════════════════════════════
   FLOATING PARTICLE FIELD — more visible, dramatic
   ═══════════════════════════════════════════ */
function HydrophobicField({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 5 + Math.random() * 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      pos[i * 3]     = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) - 2;
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    ref.current.rotation.y = time * 0.03;
    ref.current.rotation.x = Math.sin(time * 0.15) * 0.05;
    ref.current.position.y = Math.sin(time * 0.2) * 0.3;
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FF2222"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.4}
      />
    </Points>
  );
}

/* ═══════════════════════════════════════════
   SECONDARY PARTICLES — white dust
   ═══════════════════════════════════════════ */
function DustField({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    ref.current.rotation.y = time * 0.015;
    ref.current.position.y = Math.sin(time * 0.1) * 0.5;
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.008}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.15}
      />
    </Points>
  );
}

/* ═══════════════════════════════════════════
   DETAILING BAY — animated grid floor
   ═══════════════════════════════════════════ */
function DetailingBay() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!gridRef.current) return;
    gridRef.current.position.z = (state.clock.getElapsedTime() * 0.3) % 2;
  });

  return (
    <group position={[0, -4, 0]}>
      <group ref={gridRef}>
        <Grid
          infiniteGrid
          fadeDistance={40}
          fadeStrength={3}
          sectionSize={3}
          sectionColor="#FF0000"
          sectionThickness={0.3}
          cellSize={1}
          cellColor="#110011"
          cellThickness={0.1}
        />
      </group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          color="#050510"
          metalness={0.9}
          roughness={0.15}
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
}

/* ═══════════════════════════════════════════
   STUDIO LIGHTS — cinematic lighting
   ═══════════════════════════════════════════ */
function StudioLights() {
  return (
    <group>
      {/* Main overhead strip */}
      <rectAreaLight
        width={20}
        height={0.3}
        intensity={8}
        color="#ffffff"
        position={[0, 10, -5]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      {/* Red accent from above */}
      <rectAreaLight
        width={12}
        height={0.5}
        intensity={5}
        color="#FF0000"
        position={[0, 10, 2]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      {/* Side fills */}
      <pointLight position={[15, 5, 10]} intensity={0.8} color="#ffffff" distance={30} />
      <pointLight position={[-15, 5, 10]} intensity={1.2} color="#FF0000" distance={25} />
      {/* Purple accent for depth */}
      <pointLight position={[0, 3, -15]} intensity={0.6} color="#4400AA" distance={30} />
    </group>
  );
}

/* ═══════════════════════════════════════════
   CSS PARTICLES — mobile fallback (no Three.js)
   ═══════════════════════════════════════════ */
function CSSParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 1 + Math.random() * 2,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      opacity: 0.15 + Math.random() * 0.3,
    }));
  }, []);

  return (
    <div className="css-particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="css-particle"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN HERO 3D COMPONENT
   ═══════════════════════════════════════════ */
export default function Hero3D() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 768
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Ambient background gradients */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 70% at 50% -10%, rgba(255,0,0,0.12) 0%, rgba(255,0,0,0.04) 40%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 80% 80%, rgba(60,0,100,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 20% 90%, rgba(255,0,0,0.06) 0%, transparent 50%)
          `,
        }}
      />

      {/* Car background — subtle */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/brand.jpeg')`,
          opacity: 0.05,
          filter: 'saturate(0) contrast(1.5)',
        }}
      />

      {/* 3D Scene (desktop only) or CSS particles (mobile) */}
      {isMobile ? (
        <CSSParticles />
      ) : (
        <Canvas dpr={[1, 1.5]}>
          <PerspectiveCamera makeDefault position={[0, 2, 12]} fov={45} />
          <color attach="background" args={['#030305']} />
          <ambientLight intensity={0.08} />
          <StudioLights />
          <DetailingBay />
          <HydrophobicField count={4000} />
          <DustField count={2000} />
          <Stars radius={80} depth={50} count={2500} factor={5} saturation={0} fade speed={0.2} />
          <fog attach="fog" args={['#030305', 8, 35]} />
        </Canvas>
      )}

      {/* Edge fades */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#030305] via-[#030305]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#030305] via-[#030305]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030305]/50 via-transparent to-[#030305]/50" />
    </div>
  );
}
