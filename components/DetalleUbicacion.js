"use client";
import { motion } from "framer-motion";
import { Globe, Dumbbell, Home } from "lucide-react";
import styles from "./DetalleUbicacion.module.scss";

const modalidades = [
  {
    titulo: "Modalidad Online",
    icono: <Globe size={24} />,
    descripcion: "Asesoría remota total. Ideal para quienes tienen disciplina y buscan flexibilidad de horario. Incluye acceso a mi app para ver rutinas con videos explicativos y contacto directo por WhatsApp."
  },
  {
    titulo: "Presencial Gym",
    icono: <Dumbbell size={24} />,
    descripcion: "Entrenamiento 1 a 1 en el gimnasio. Me encargo de corregir cada repetición, optimizar tu biomecánica y asegurar que el esfuerzo sea real. Ideal para quienes buscan máxima intensidad y técnica perfecta."
  },
  {
    titulo: "Coach a Domicilio",
    icono: <Home size={24} />,
    descripcion: "Privacidad y comodidad absoluta. Llevo el entrenamiento a tu casa o torre de departamentos. Incluye el uso de equipo básico especializado si no cuentas con gimnasio propio."
  }
];

export default function DetalleUbicacion() {
  return (
    <div className={styles.contenedorDetalles}>
      {modalidades.map((item, index) => (
        <motion.div 
          key={index}
          className={styles.itemDetalle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <header>
            <div className={styles.icono}>{item.icono}</div>
            <h4>{item.titulo}</h4>
          </header>
          <p>{item.descripcion}</p>
        </motion.div>
      ))}
    </div>
  );
}