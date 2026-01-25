"use client";
import { motion } from "framer-motion";
import styles from "./Proceso.module.scss";

const pasos = [
  { titulo: "Registro", desc: "Llenas el formulario con tus datos y metas." },
  { titulo: "Evaluación", desc: "Analizamos tu nivel actual y lesiones." },
  { titulo: "Planificación", desc: "Recibes tu dieta y rutina personalizada." },
  { titulo: "Evolución", desc: "Monitoreo constante y ajustes semanales." }
];

export default function Proceso() {
  return (
    <section className={styles.seccionProceso}>
      <h2>Tu camino al <span>éxito</span></h2>
      <div className={styles.gridPasos}>
        {pasos.map((p, i) => (
          <motion.div 
            key={i} 
            className={styles.paso}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className={styles.numero}>{i + 1}</div>
            <h4>{p.titulo}</h4>
            <p>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}