"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Transformaciones.module.scss";
import Link from "next/link";

const casos = [
  { 
    nombre: "Aaron", 
    tiempo: "12 semanas", 
    meta: "Volumen Muscular", 
    fotoAntes: "/transformaciones/A1.png", 
    fotoDespues: "/transformaciones/A2.png" 
  },
  { 
    nombre: "Luis", 
    tiempo: "6 meses", 
    meta: "Definición",
    fotoAntes: "/transformaciones/B1.png", 
    fotoDespues: "/transformaciones/B2.png" 
   },
  { 
    nombre: "Pedro", 
    tiempo: "3 meses", 
    meta: "Volumen Muscular", 
    fotoAntes: "/transformaciones/C1.png", 
    fotoDespues: "/transformaciones/C2.png" 
   },
];

export default function Transformaciones() {
  return (
    <section id="transformaciones" className={styles.contenedor}>
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Casos de Éxito
      </motion.h2>

      <div className={styles.gridTransformaciones}>
        {casos.map((caso, index) => (
          <motion.div 
            key={index}
            className={styles.tarjetaTransformacion}
            whileHover={{ y: -10 }}
          >
            <div className={styles.fotos}>         
              <div>
                <Image 
                  src={caso.fotoAntes} 
                  alt="Antes" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <Image 
                  src={caso.fotoDespues} 
                  alt="Después" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <h4>{caso.nombre}</h4>
            <span>{caso.meta} • {caso.tiempo}</span>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className={styles.contenedorBoton}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link href="/casos-exito" className={styles.botonVerMas}>
          Ver más transformaciones
        </Link>
      </motion.div>
    </section>
  );
}