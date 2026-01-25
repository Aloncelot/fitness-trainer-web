"use client";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import styles from "./Toast.module.scss";

export default function Toast({ mensaje, visible, setVisible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.toast}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          onAnimationComplete={() => setTimeout(() => setVisible(false), 3000)}
        >
          <div className={styles.contenido}>
            <CheckCircle color="#fff" size={20} />
            <span>{mensaje}</span>
          </div>
          
          <button onClick={() => setVisible(false)} className={styles.botonCerrar}>
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}