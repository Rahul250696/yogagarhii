import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Floating Lotus Petal Shape
function LotusPetal({ position, rotation, scale, color, speed }: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002 * speed;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3 * speed) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <torusGeometry args={[0.3, 0.08, 8, 24]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.6}
        roughness={0.3}
        metalness={0.4}
      />
    </mesh>
  );
}

// Sacred Ring
function SacredRing({ radius, speed, color, opacity }: {
  radius: number;
  speed: number;
  color: string;
  opacity: number;
}) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.001 * speed;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.02, 16, 64]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={opacity}
        roughness={0.5}
        metalness={0.3}
      />
    </mesh>
  );
}

// Floating Particles
function Particles({ count = 50 }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }
    return positions;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#d4a574"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Central Mandala
function CentralMandala() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer ring */}
      <mesh rotation={[0, 0, 0]}>
        <ringGeometry args={[0.8, 0.85, 32]} />
        <meshStandardMaterial color="#d4a574" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>

      {/* Inner ring */}
      <mesh rotation={[0, 0, 0]}>
        <ringGeometry args={[0.5, 0.55, 32]} />
        <meshStandardMaterial color="#c9956c" transparent opacity={0.5} side={THREE.DoubleSide} />
      </mesh>

      {/* Center */}
      <mesh>
        <circleGeometry args={[0.2, 32]} />
        <meshStandardMaterial color="#f5deb3" transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>

      {/* Petals */}
      {[...Array(8)].map((_, i) => (
        <mesh key={i} rotation={[0, 0, (i * Math.PI) / 4]} position={[0, 0, 0]}>
          <planeGeometry args={[0.15, 0.6]} />
          <meshStandardMaterial
            color="#e8c9a0"
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

// Floating Sphere with Distortion
function FloatingSphere({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={position}>
        <icosahedronGeometry args={[0.15, 1]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.4}
          distort={0.3}
          speed={2}
          roughness={0.4}
        />
      </mesh>
    </Float>
  );
}

// Main Scene
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#fff5e6" />
      <pointLight position={[-5, -5, 5]} intensity={0.4} color="#d4a574" />

      {/* Central Mandala */}
      <CentralMandala />

      {/* Sacred Rings */}
      <SacredRing radius={1.2} speed={1} color="#d4a574" opacity={0.3} />
      <SacredRing radius={1.5} speed={-0.7} color="#c9956c" opacity={0.2} />
      <SacredRing radius={1.8} speed={0.5} color="#e8c9a0" opacity={0.15} />

      {/* Lotus Petals */}
      <LotusPetal position={[-1.2, 0.5, 0]} rotation={[0, 0, Math.PI / 6]} scale={0.8} color="#d4a574" speed={1} />
      <LotusPetal position={[1.3, -0.3, 0.2]} rotation={[0, 0, -Math.PI / 4]} scale={0.6} color="#c9956c" speed={1.2} />
      <LotusPetal position={[0.8, 0.8, -0.3]} rotation={[0, 0, Math.PI / 3]} scale={0.5} color="#e8c9a0" speed={0.8} />
      <LotusPetal position={[-0.9, -0.6, 0.1]} rotation={[0, 0, -Math.PI / 5]} scale={0.7} color="#f5deb3" speed={1.1} />

      {/* Floating Spheres */}
      <FloatingSphere position={[-1.5, 1, 0.5]} color="#d4a574" />
      <FloatingSphere position={[1.6, 0.8, -0.3]} color="#c9956c" />
      <FloatingSphere position={[0, -1.2, 0.4]} color="#e8c9a0" />
      <FloatingSphere position={[-1.8, -0.5, -0.2]} color="#f5deb3" />
      <FloatingSphere position={[1.4, -0.9, 0.6]} color="#d4a574" />

      {/* Particles */}
      <Particles count={80} />
    </>
  );
}

// Exported Component
const SacredGeometryBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default SacredGeometryBackground;
