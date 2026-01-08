import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="section-divider"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  );
}
