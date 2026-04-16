import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars, Grid, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function HydrophobicField({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    ref.current.rotation.y = time * 0.05;
    ref.current.position.y = Math.sin(time * 0.3) * 0.1;
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.25}
      />
    </Points>
  );
}

function DetailingBay() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!gridRef.current) return;
    gridRef.current.position.z = (state.clock.getElapsedTime() * 0.5) % 1;
  });

  return (
    <group position={[0, -3.5, 0]}>
      <group ref={gridRef}>
        <Grid
          infiniteGrid
          fadeDistance={50}
          fadeStrength={5}
          sectionSize={2}
          sectionColor="#FF0000"
          sectionThickness={0.5}
          cellSize={1}
          cellColor="#050505"
          cellThickness={0.2}
        />
      </group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          color="#000000"
          metalness={1}
          roughness={0.1}
          transparent
          opacity={0.95}
        />
      </mesh>
    </group>
  );
}

function StudioLights() {
  return (
    <group>
      <rectAreaLight
        width={15}
        height={0.2}
        intensity={5}
        color="#ffffff"
        position={[0, 8, -5]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <rectAreaLight
        width={15}
        height={0.2}
        intensity={3}
        color="#FF0000"
        position={[0, 8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <pointLight position={[10, 5, 10]} intensity={0.5} color="#ffffff" />
      <pointLight position={[-10, 5, 10]} intensity={0.8} color="#FF0000" />
    </group>
  );
}

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
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#010101]">
      {/* Dark luxury car — very subtle, gives the "detailing studio" vibe */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1603584173870-7f3118020352?q=80&w=1920&auto=format&fit=crop')`,
          opacity: 0.07,
          filter: 'saturate(0) contrast(1.8)',
        }}
      />

      {/* Red spotlight beam from top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 45% 65% at 50% -5%, rgba(255,0,0,0.14) 0%, rgba(255,0,0,0.05) 45%, transparent 70%)',
        }}
      />

      {/* Ambient floor glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 35% at 50% 100%, rgba(255,0,0,0.07) 0%, transparent 60%)',
        }}
      />

      {/* Three.js scene */}
      <Canvas dpr={isMobile ? [1, 1] : [1, 1.5]}>
        <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={45} />
        <color attach="background" args={['#010101']} />
        <ambientLight intensity={0.1} />
        <StudioLights />
        <DetailingBay />
        <HydrophobicField count={isMobile ? 500 : 3000} />
        {!isMobile && (
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.3} />
        )}
        <fog attach="fog" args={['#010101', 5, 30]} />
      </Canvas>

      {/* Top edge fade */}
      <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-[#010101] to-transparent" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#010101] to-transparent" />
      {/* Side vignettes */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#010101]/60 via-transparent to-[#010101]/60" />
    </div>
  );
}
