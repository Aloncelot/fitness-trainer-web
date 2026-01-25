"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <section className={styles.heroWrapper} ref={ref} id="inicio">
      <motion.div className={styles.backgroundImage} style={{ y: yImage }}>
        <Image 
          src="/hero-gym.jpg" 
          alt="Bodybuilding Motivation"
          fill
          priority
        />
      </motion.div>

      <div className={styles.overlay} />

      <motion.div 
        className={styles.contenido}
        style={{ opacity: opacityText, y: yText }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          FORJA TU <span>MEJOR VERSIÓN</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Entrenamientos personalizados y planes de nutrición para llevar tu físico al siguiente nivel.
        </motion.p>
        <motion.div 
          className={styles.contenedorBoton}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a href="#precios" className={styles.botonHero}>
            Ver Planes y Precios
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

