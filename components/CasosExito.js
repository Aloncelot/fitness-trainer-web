"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./CasosExito.module.scss";

const transformaciones = [
  {
    id: 1,
    nombre: "Juan Pérez",
    categoria: "Definición",
    tiempo: "12 Semanas",
    desc: "Reducción del 15% al 8% de grasa corporal manteniendo masa muscular.",
    fotoAntes: "/transformaciones/juan-antes.jpg",
    fotoDespues: "/transformaciones/juan-despues.jpg"
  },
  {
    id: 2,
    nombre: "Carla Gómez",
    categoria: "Volumen",
    tiempo: "6 Meses",
    desc: "Aumento de 5kg de masa magra con enfoque en tren inferior.",
    fotoAntes: "/transformaciones/carla-antes.jpg",
    fotoDespues: "/transformaciones/carla-despues.jpg"
  },
  // Agrega más casos aquí...
];

export default function CasosExito() {
  const [filtro, setFiltro] = useState("Todos");
  const categorias = ["Todos", "Definición", "Volumen", "Recomposición"];

  const casosFiltrados = filtro === "Todos" 
    ? transformaciones 
    : transformaciones.filter(c => c.categoria === filtro);

  return (
    <section className={styles.seccionCasos}>
      <h1>Resultados <span>Reales</span></h1>

      <div className={styles.filtros}>
        {categorias.map(cat => (
          <button 
            key={cat}
            className={filtro === cat ? styles.activo : ""}
            onClick={() => setFiltro(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className={styles.gridCasos}>
        <AnimatePresence mode="popLayout">
          {casosFiltrados.map((caso) => (
            <motion.div 
              key={caso.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={styles.tarjetaCaso}
            >
              <div className={styles.fotos}>
                <div><Image src={caso.fotoAntes} alt="Antes" fill style={{objectFit: 'cover'}} unoptimized /></div>
                <div><Image src={caso.fotoDespues} alt="Después" fill style={{objectFit: 'cover'}} unoptimized /></div>
              </div>
              <div className={styles.info}>
                <h3>{caso.nombre}</h3>
                <p>{caso.desc}</p>
                <div className={styles.detalles}>
                  <span>Objetivo: {caso.categoria}</span>
                  <span>Tiempo: {caso.tiempo}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}