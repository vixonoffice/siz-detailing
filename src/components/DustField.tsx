import { useEffect, useRef } from 'react';
import { useIsDesktop } from '../hooks/useIsDesktop';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function DustField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDesktop = useIsDesktop();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isDesktop || reducedMotion) return;

    let three: typeof import('three') | null = null;
    let renderer: import('three').WebGLRenderer | null = null;
    let animId: number;

    import('three').then((THREE) => {
      three = THREE;
      const canvas = canvasRef.current;
      if (!canvas) return;

      const scene    = new THREE.Scene();
      const camera   = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.z = 5;

      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

      const N = 800;
      const positions  = new Float32Array(N * 3);
      const velocities = new Float32Array(N * 3);
      const colors     = new Float32Array(N * 3);

      for (let i = 0; i < N; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 5;

        velocities[i * 3]     = (Math.random() - 0.5) * 0.002;
        velocities[i * 3 + 1] = Math.random() * 0.004 + 0.001;
        velocities[i * 3 + 2] = 0;

        const isRed = Math.random() < 0.1;
        if (isRed) {
          colors[i * 3]     = 1;
          colors[i * 3 + 1] = 0.18;
          colors[i * 3 + 2] = 0.18;
        } else {
          colors[i * 3]     = 0.98;
          colors[i * 3 + 1] = 0.98;
          colors[i * 3 + 2] = 0.97;
        }
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const mat = new THREE.PointsMaterial({
        size: 0.04,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geo, mat);
      scene.add(points);

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer?.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', onResize, { passive: true });

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const pos = geo.attributes.position.array as Float32Array;
        for (let i = 0; i < N; i++) {
          pos[i * 3]     += velocities[i * 3];
          pos[i * 3 + 1] += velocities[i * 3 + 1];

          // reset particle when it goes out of bounds
          if (pos[i * 3 + 1] > 12) {
            pos[i * 3 + 1] = -12;
            pos[i * 3]     = (Math.random() - 0.5) * 20;
          }
        }
        geo.attributes.position.needsUpdate = true;
        renderer?.render(scene, camera);
      };
      animate();

      return () => {
        window.removeEventListener('resize', onResize);
        cancelAnimationFrame(animId);
        renderer?.dispose();
        geo.dispose();
        mat.dispose();
      };
    });

    return () => {
      cancelAnimationFrame(animId);
      renderer?.dispose();
    };
  }, [isDesktop, reducedMotion]);

  if (!isDesktop || reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.7,
      }}
    />
  );
}
