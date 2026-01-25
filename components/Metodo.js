"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import styles from "./Metodo.module.scss";

const puntosMetodo = [
  { t: "Evaluación Inicial", d: "Analizamos tu punto de partida y lesiones. No eres un número; diseño según tu realidad actual." },
  { t: "Programación Individualizada", d: "Desde movilidad para adultos mayores hasta fuerza para atletas. Tu plan es único." },
  { t: "Técnica con Propósito", d: "Te enseño el 'cómo' y el 'porqué' de cada ejercicio para evitar lesiones." },
  { t: "Logros Semanales", d: "Dividimos tus metas en pequeños avances para mantener tu motivación al máximo." },
  { t: "Ajuste Continuo", d: "A diferencia del gimnasio masivo, mi plan evoluciona contigo y se ajusta a tu ritmo." },
  { t: "Salud Integral", d: "Entrenamos para que tengas más energía y menos dolores en tu vida diaria." }
];

export default function Metodo() {
  return (
    <section className={styles.seccionMetodo} id="metodo">
      <h2>Mi Método: <span>Paso a paso</span></h2>
      <div className={styles.gridMetodo}>
        {puntosMetodo.map((item, i) => (
          <motion.div 
            key={i} 
            className={styles.tarjeta}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <CheckCircle2 color="#e63946" size={32} />
            <h4>{item.t}</h4>
            <p>{item.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}