import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Lights from "./Lights";
import HeroObject from "./objects/HeroObject";

export default function Scene() {
  const { camera, mouse } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useFrame(() => {
    target.current.x = mouse.x * 0.5;
    target.current.y = mouse.y * 0.3;

    camera.position.x += (target.current.x - camera.position.x) * 0.05;
    camera.position.y += (target.current.y - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <Lights />
      <HeroObject />
    </>
  );
}
