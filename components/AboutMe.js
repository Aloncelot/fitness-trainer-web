"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Para el link a la historia completa
import styles from "./AboutMe.module.scss"; 

export default function AboutMe() {
  return (
    <section className={styles.seccionAcerca} id="acerca">
      <motion.div 
        className={styles.imagenDiego}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Image src="/CD2.png" alt="Coach Diego Sandoval" fill style={{ objectFit: 'cover' }} />
      </motion.div>

      <motion.div 
        className={styles.texto}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <h2>Sobre <span>Diego Sandoval</span></h2>
        <p>
          Entrenador personal con 6 años de experiencia. Mi enfoque se aleja de las rutinas de "molde" 
          para ofrecerte un sistema 100% personalizado y progresivo.
        </p>
        <p>
          Mi objetivo es desarrollar tu fuerza y estabilidad mediante movimientos funcionales, 
          integrando el ejercicio en tu vida como una herramienta de bienestar.
        </p>
        
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <h4>6+ Años</h4>
            <span>Experiencia</span>
          </div>
          <div className={styles.statItem}>
            <h4>100%</h4>
            <span>Personalizado</span>
          </div>
        </div>

        {/* Botón sutil para la historia personal */}
        <Link href="/mi-historia" className={styles.linkHistoria}>
          Conoce mi historia: ¿Por qué hago esto? →
        </Link>
      </motion.div>
    </section>
  );
}