"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./TiendaPreview.module.scss";

const MotionLink = motion(Link);

export default function TiendaPreview() {
  return (
    <section className={styles.seccionPreview}>
      <MotionLink
        href="/suplementos"
        className={styles.bannerLink}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Image
          src="/suplementosTienda.jpg"
          alt="Visita la Tienda de Suplementos de Diego Sandoval"
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 92vw, 70vw"
          priority={false}
        />
        
        <div className={styles.overlay}>
          <div className={styles.contenido}>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              TIENDA DE <span>SUPLEMENTOS</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Impulsa tus resultados con la suplementación <br />recomendada por mi
            </motion.p>
            <span className={styles.fakeBtn}>Ver Productos</span>
          </div>
        </div>
      </MotionLink>
    </section>
  );
}