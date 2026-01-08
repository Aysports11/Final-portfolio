import { Canvas } from "@react-three/fiber";

export default function ThreeCanvas({ children }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </Canvas>
  );
}
