"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./Faqs.module.scss";

const faqs = [
  {
    pregunta: "¿Necesito suplementos para ver resultados?",
    respuesta: "No son obligatorios. La base es la alimentación sólida. Los suplementos son herramientas que pueden ayudar a cubrir deficiencias o por comodidad, pero evaluaremos tu caso específico."
  },
  {
    pregunta: "¿En cuánto tiempo veré cambios físicos?",
    respuesta: "Los cambios visuales suelen notarse a partir de la 4ta semana de constancia. Sin embargo, la mejora en energía y fuerza ocurre desde los primeros 10 días."
  },
  {
    pregunta: "¿Qué pasa si tengo una lesión previa?",
    respuesta: "Diseñamos la rutina en base a tus limitaciones. Si tienes una lesión, buscaremos ejercicios con biomecánica segura para que sigas progresando sin dolor."
  },
  {
    pregunta: "¿La dieta incluye alimentos que me gusten?",
    respuesta: "¡Claro! No creo en dietas extremas de pollo y brócoli. Usamos un enfoque flexible donde el 80% es comida densa en nutrientes y el 20% son gustos moderados."
  }
];

export default function Faqs() {
  const [indiceAbierto, setIndiceAbierto] = useState(null);

  const toggleFaq = (index) => {
    setIndiceAbierto(indiceAbierto === index ? null : index);
  };

  return (
    <section className={styles.seccionFaqs} id="faqs">
      <h2>Dudas <span>Frecuentes</span></h2>

      <div className={styles.contenedorFaqs}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button 
              className={styles.pregunta} 
              onClick={() => toggleFaq(index)}
            >
              {faq.pregunta}
              <ChevronDown 
                className={`${styles.icono} ${indiceAbierto === index ? styles.abierto : ""}`} 
                size={20} 
              />
            </button>

            <AnimatePresence>
              {indiceAbierto === index && (
                <motion.div
                  className={styles.respuesta}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p>{faq.respuesta}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}