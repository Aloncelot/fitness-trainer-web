"use client";
import { motion } from "framer-motion";
import styles from "./Precios.module.scss";
import DetalleUbicacion from "./DetalleUbicacion";

const columnas = ["Servicio", "Online", "Gym", "Domicilio"];

const filas = [
  { 
    nombre: "Estándar (Volumen/Def)", 
    precios: { online: "$1,500", gym: "$3,500", domicilio: "$6,000" } 
  },
  { 
    nombre: "Solo Nutrición", 
    precios: { online: "$800", gym: "$800", domicilio: "$1,500" } 
  },
  { 
    nombre: "Plan Dúo (Parejas)", 
    precios: { online: "$2,500", gym: "$5,500", domicilio: "$10,000" } 
  },
  { 
    nombre: "Preparación Competición", 
    precios: { online: "$3,000", gym: "$5,000", domicilio: "N/A" } 
  },
];

export default function Precios() {
  return (
    <section className={styles.seccionPrecios} id="precios">
      <h2>Planes</h2>
      
      <div className={styles.contenedorTabla}>
        <div className={styles.tabla}>

          {columnas.map((col, i) => (
            <div key={i} className={`${styles.celda} styles.headerCol`}>
              {col}
            </div>
          ))}

          {filas.map((fila, index) => (
            <motion.div 
              key={index} 
              className={styles.fila}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`${styles.celda} ${styles.nombrePlan}`}>
                {fila.nombre}
              </div>
              
              <div className={styles.celda}>
                <div className={styles.precio}>{fila.precios.online} <span>/mes</span></div>
              </div>

              <div className={styles.celda}>
                <div className={styles.precio}>{fila.precios.gym} <span>/mes</span></div>
              </div>

              <div className={styles.celda}>
                <div className={styles.precio === "N/A" ? styles.noDisponible : styles.precio}>
                   {fila.precios.domicilio} 
                   {fila.precios.domicilio !== "N/A" && <span>/mes</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <DetalleUbicacion />
    </section>
  );
}