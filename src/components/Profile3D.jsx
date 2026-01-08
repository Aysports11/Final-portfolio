import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function Profile3D() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      style={styles.container}
    >
      <motion.div
        animate={{
          rotateY: [0, 8, -8, 0],
          rotateX: [0, -6, 6, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.05,
          rotateY: 0,
          rotateX: 0,
        }}
        style={styles.card}
      >
        <img src={profile} alt="Profile" style={styles.image} />
      </motion.div>
    </motion.div>
  );
}

const styles = {
  container: {
    perspective: "1200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.08)",
    boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    transformStyle: "preserve-3d",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "92%",
    height: "92%",
    objectFit: "cover",
    borderRadius: "50%",
  },
};
