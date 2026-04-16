import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars, Grid, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function HydrophobicField() {
  const ref = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const pos = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

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
        opacity={0.3}
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
      
      {/* Polished Floor Reflection Plane */}
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
        intensity={2}
        color="#FF0000"
        position={[0, 8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <pointLight position={[10, 5, 10]} intensity={0.5} color="#ffffff" />
      <pointLight position={[-10, 5, 10]} intensity={0.5} color="#FF0000" />
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#010101]">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={45} />
        
        <color attach="background" args={['#010101']} />
        <ambientLight intensity={0.1} />
        
        <StudioLights />
        <DetailingBay />
        <HydrophobicField />
        
        <Stars 
          radius={100} 
          depth={50} 
          count={2000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={0.3} 
        />
        
        <fog attach="fog" args={['#010101', 5, 30]} />
      </Canvas>
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-[#010101] pointer-events-none" />
    </div>
  );
}
