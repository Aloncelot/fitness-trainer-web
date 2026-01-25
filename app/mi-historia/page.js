"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // <--- IMPORTANTE: No olvides importar Image
import { ArrowLeft } from "lucide-react";
import styles from "./MiHistoria.module.scss";

export default function MiHistoria() {
  return (
    <main className={styles.paginaHistoria}>
      <div className={styles.contenedor}>
        <Link href="/#acerca" className={styles.volver}>
          <ArrowLeft size={20} /> Volver a la página principal
        </Link>

        <motion.article 
          className={styles.articulo} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Por qué hago <span>lo que hago</span></h1>
          
          <div className={styles.contenidoTexto}>
            <p>
              Mi transición del gimnasio comercial al entrenamiento personal nació de una observación simple: 
              el modelo estándar le está fallando a la gente.
            </p>
            <p>
              Vi a personas mayores o con necesidades especiales recibir rutinas "copiadas y pegadas", 
              perdiendo el tiempo y la motivación por falta de guía.
            </p>

            {/* === NUEVA SECCIÓN DE IMAGEN 16:9 === */}
            <motion.div 
              className={styles.contenedorImagen}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Image 
                src="/CD3.png" 
                alt="Diego Sandoval en sus inicios como entrenador"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 800px) 90vw, 800px"
              />
            </motion.div>
            {/* =================================== */}

            <blockquote>
              "La motivación real nace de los resultados visibles. Cuando ves cambios constantes, 
              el entrenamiento deja de ser una obligación y se convierte en una pasión."
            </blockquote>

            <p>
              Decidí independizarme para cambiar esto. Mi enfoque es claro: que entiendas el "porqué" 
              de cada movimiento para que logres una transformación real y duradera.
            </p>
            {/* ... resto del texto ... */}
          </div>
        </motion.article>
      </div>
    </main>
  );
}