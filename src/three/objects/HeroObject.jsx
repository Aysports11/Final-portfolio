import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function HeroObject() {
  const mesh = useRef();

  useFrame((_, delta) => {
    mesh.current.rotation.y += delta * 0.4;
    mesh.current.rotation.x += delta * 0.2;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#6366f1" />
    </mesh>
  );
}
