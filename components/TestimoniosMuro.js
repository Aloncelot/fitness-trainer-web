"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import styles from "./TestimoniosMuro.module.scss";

// Datos locales (Mockup de Firebase)
const todasLasReseñas = [
  {
    id: 1,
    nombre: "Ricardo M.",
    modalidad: "Online",
    texto: "Llevo 6 meses con Diego y el cambio en mi composición corporal es increíble. La app es muy intuitiva.",
    estrellas: 5
  },
  {
    id: 2,
    nombre: "Sofía T.",
    modalidad: "Presencial Gym",
    texto: "Buscaba a alguien que supiera de biomecánica porque tenía una lesión de hombro. Diego adaptó todo y hoy entreno sin dolor y con más peso que nunca. Su atención al detalle en el gimnasio es impecable.",
    estrellas: 5
  },
  {
    id: 3,
    nombre: "Andrés G.",
    modalidad: "Domicilio",
    texto: "La comodidad de entrenar en casa con equipo profesional y la guía de un experto no tiene precio. 100% recomendado.",
    estrellas: 5
  },
  {
    id: 4,
    nombre: "Valeria D.",
    modalidad: "Online",
    texto: "¡Bajé 5kg de grasa en el primer mes! El plan de nutrición no es nada aburrido, puedo comer de todo con moderación.",
    estrellas: 5
  },
  {
    id: 5,
    nombre: "Jorge B.",
    modalidad: "Online",
    texto: "Lo que más me gusta es el check-in semanal. Diego realmente analiza tus fotos y medidas para ajustar el plan. No es una rutina de 'copiar y pegar' como otras que he comprado antes.",
    estrellas: 5
  },
  {
    id: 6,
    nombre: "Lucía P.",
    modalidad: "Presencial Gym",
    texto: "Disciplina pura. Diego te motiva a dar ese 10% extra en cada serie.",
    estrellas: 5
  }
];

export default function TestimoniosMuro() {
  return (
    <section className={styles.seccionMuro}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Historias de <span>Éxito</span>
      </motion.h1>

      <div className={styles.muro}>
        {todasLasReseñas.map((res, index) => (
          <motion.div 
            key={res.id} 
            className={styles.tarjetaTestimonio}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={styles.tag}>{res.modalidad}</div>
            <div className={styles.estrellas}>
              {[...Array(res.estrellas)].map((_, i) => (
                <Star key={i} size={14} fill="#f1c40f" />
              ))}
            </div>
            <p>"{res.texto}"</p>
            <div className={styles.infoAtleta}>
              <div className={styles.avatar}>{res.nombre[0]}</div>
              <div className={styles.detalles}>
                <span>{res.nombre}</span>
                <small>Atleta Diego Sandoval</small>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}