"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import styles from "./Opiniones.module.scss";
import Link from "next/link";

export default function Opiniones() {
  const [opiniones, setOpiniones] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarOpiniones = async () => {
      try {
        const res = await fetch('/api/testimonios');
        const data = await res.json();
        
        if (Array.isArray(data)) {
            setOpiniones(data.slice(0, 3)); 
        } else {
            console.error("La API no devolvió un arreglo. Recibimos:", data);
          }

      } catch (error) {
        console.error("Error al cargar testimonios:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarOpiniones();
  }, []);

  return (
    <section className={styles.seccionOpiniones}>
      <motion.h2 
        style={{ textAlign: 'center' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Lo que dicen <span>mis atletas</span>
      </motion.h2>

      {cargando ? (
        <p style={{ textAlign: 'center', color: 'white', marginTop: '20px' }}>Cargando testimonios...</p>
      ) : (
        <div className={styles.gridOpiniones}>
          {opiniones.map((op, index) => (
            <motion.div 
              key={op.Id || index} 
              className={styles.tarjetaOpinion}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.estrellas}>
                {[...Array(op.Calificacion)].map((_, i) => (
                  <Star key={i} size={16} fill="#f1c40f" />
                ))}
              </div>
              <p>&quot;{op.Comentario}&quot;</p>
              
              <span style={{ 
                fontSize: '0.8rem', 
                color: '#4ade80', 
                display: 'block', 
                marginBottom: '10px' 
              }}>
                Entrenamiento: {op.Modalidad}
              </span>

              <div className={styles.autor}>
                <div className={styles.avatar}>{op.Nombre[0]}</div>
                <span>{op.Nombre}</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      
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