"use client";
import { motion } from "framer-motion";
import { Dumbbell, Target, Zap } from "lucide-react";
import styles from "./Servicios.module.scss";

const servicios = [
  {
    titulo: "Volumen Muscular",
    descripcion: "Diseñado para quienes buscan ganar masa muscular con superávit calórico controlado.",
    icono: <Dumbbell size={40} />,
  },
  {
    titulo: "Definición Extrema",
    descripcion: "Enfoque en pérdida de grasa manteniendo la mayor cantidad de músculo posible.",
    icono: <Target size={40} />,
  },
  {
    titulo: "Mantenimiento",
    descripcion: "Ideal para optimizar tu salud y rendimiento sin cambios bruscos de peso.",
    icono: <Zap size={40} />,
  },
];

const contenedorVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const tarjetaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Servicios() {
  return (
    <section id="servicios" className={styles.seccionServicios}>
      <h2>Nuestros Planes</h2>

      <motion.div 
        className={styles.gridServicios}
        variants={contenedorVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true }}
      >
        {servicios.map((servicio, index) => (
          <motion.div 
            key={index} 
            className={styles.tarjeta}
            variants={tarjetaVariants}
          >
            <div style={{ color: '#e63946', marginBottom: '1rem' }}>
              {servicio.icono}
            </div>
            <h3>{servicio.titulo}</h3>
            <p>{servicio.descripcion}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}