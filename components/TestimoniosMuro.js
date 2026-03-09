"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./TestimoniosMuro.module.scss";

export default function TestimoniosMuro() {
  const [testimonios, setTestimonios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [paginaActual, setPaginaActual] = useState(1);
  const itemsPorPagina = 9;

  useEffect(() => {
    const fetchTestimonios = async () => {
      try {
        const res = await fetch('/api/testimonios');
        const data = await res.json();
        setTestimonios(data);
      } catch (error) {
        console.error("Error al cargar testimonios:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchTestimonios();
  }, []);

  // Lógica de cálculo para la paginación
  const indiceUltimoItem = paginaActual * itemsPorPagina;
  const indicePrimerItem = indiceUltimoItem - itemsPorPagina;
  const testimoniosActuales = testimonios.slice(indicePrimerItem, indiceUltimoItem);
  const totalPaginas = Math.ceil(testimonios.length / itemsPorPagina);

  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
    // Un pequeño detalle UX: Subir un poco la pantalla al cambiar de página
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <section className={styles.seccionMuro}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Historias de <span>Éxito</span>
      </motion.h1>

      {cargando ? (
        <p style={{ textAlign: 'center', color: 'white' }}>Cargando testimonios reales...</p>
      ) : testimonios.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'white' }}>Aún no hay testimonios aprobados.</p>
      ) : (
        <>
          {/* AnimatePresence gestiona el desmontaje visual de las tarjetas viejas */}
          <AnimatePresence mode="wait">
            <motion.div
              key={paginaActual} // La clave hace que Framer Motion sepa que la página cambió
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={styles.muro}
            >
              {testimoniosActuales.map((res, index) => (
                <motion.div 
                  key={res.Id} 
                  className={styles.tarjetaTestimonio}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className={styles.tag}>{res.Modalidad}</div>
                  <div className={styles.estrellas}>
                    {[...Array(res.Calificacion)].map((_, i) => (
                      <Star key={i} size={14} fill="#f1c40f" />
                    ))}
                  </div>
                  <p>"{res.Comentario}"</p>
                  <div className={styles.infoAtleta}>
                    <div className={styles.avatar}>{res.Nombre[0]}</div>
                    <div className={styles.detalles}>
                      <span>{res.Nombre}</span>
                      <small>Atleta Diego Sandoval</small>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Controles de Paginación */}
          {totalPaginas > 1 && (
            <div className={styles.paginacion}>
              <button
                onClick={() => cambiarPagina(paginaActual - 1)}
                disabled={paginaActual === 1}
                className={styles.botonFlecha}
              >
                <ChevronLeft size={20} />
              </button>

              {[...Array(totalPaginas)].map((_, index) => {
                const numPagina = index + 1;
                return (
                  <button
                    key={numPagina}
                    onClick={() => cambiarPagina(numPagina)}
                    className={`${styles.botonNumero} ${paginaActual === numPagina ? styles.activo : ""}`}
                  >
                    {numPagina}
                  </button>
                );
              })}

              <button
                onClick={() => cambiarPagina(paginaActual + 1)}
                disabled={paginaActual === totalPaginas}
                className={styles.botonFlecha}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}