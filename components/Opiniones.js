"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import styles from "./Opiniones.module.scss";
import Link from "next/link";

const opiniones = [
  {
    nombre: "Roberto L.",
    texto: "Diego no solo me dio una dieta, me enseñó a comer. He bajado 10kg de grasa y mi fuerza está en su punto más alto.",
    calificacion: 5
  },
  {
    nombre: "Mariana K.",
    texto: "La modalidad online es súper completa. Los videos explican perfecto la técnica y Diego siempre responde mis dudas.",
    calificacion: 5
  },
  {
    nombre: "Carlos V.",
    texto: "Entrenar presencial con él es otro nivel. La exigencia y el enfoque en la biomecánica me evitaron lesiones que antes tenía.",
    calificacion: 5
  }
];

export default function Opiniones() {
  return (
    <section className={styles.seccionOpiniones}>
      <motion.h2 
        style={{ textAlign: 'center' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Lo que dicen <span>mis atletas</span>
      </motion.h2>

      <div className={styles.gridOpiniones}>
        {opiniones.map((op, index) => (
          <motion.div 
            key={index} 
            className={styles.tarjetaOpinion}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={styles.estrellas}>
              {[...Array(op.calificacion)].map((_, i) => (
                <Star key={i} size={16} fill="#f1c40f" />
              ))}
            </div>
            <p>"{op.texto}"</p>
            <div className={styles.autor}>
              <div className={styles.avatar}>{op.nombre[0]}</div>
              <span>{op.nombre}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className={styles.contenedorBoton}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link href="/testimonios" className={styles.botonVerMas}>
          Leer todas las reseñas
        </Link>
      </motion.div>
    </section>
  );
}