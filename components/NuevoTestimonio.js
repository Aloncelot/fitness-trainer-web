"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./NuevoTestimonio.module.scss";

const opcionesModalidad = ["Online", "Presencial (Gym)", "A Domicilio"];

export default function NuevoTestimonio() {
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [rating, setRating] = useState(0);
  const [modalidad, setModalidad] = useState(""); // Nuevo estado para la etiqueta
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validaciones
    if (!modalidad) {
        return alert("Por favor, selecciona la modalidad de tu entrenamiento.");
    }
    
    if (rating === 0) {
        return alert("Por favor, selecciona una calificación de 1 a 5 estrellas.");
    }

    try {
        const res = await fetch('/api/testimonios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                nombre, 
                comentario, 
                rating,
                modalidad 
            }),
        });

        if (res.ok) {
            setEnviado(true);
            setTimeout(() => {
                setEnviado(false);
                setNombre("");
                setComentario("");
                setRating(0);
                setModalidad("");
            }, 3000);
        } else {
            alert("Hubo un error al enviar tu reseña.");
        }
    } catch (error) {
        console.error("Error en la petición:", error);
    }
};
  return (
    <section className={styles.seccionForm}>
      <h3>Comparte tu <span>Experiencia</span></h3>
      
      {enviado ? (
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          style={{ textAlign: 'center', color: '#4ade80' }}
        >
          ¡Gracias! Tu reseña ha sido enviada para revisión.
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.formulario}>
          <div className={styles.estrellas}>
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                type="button"
                className={rating >= num ? styles.activa : ""}
                onClick={() => setRating(num)}
              >
                <Star fill={rating >= num ? "currentColor" : "none"} size={28} />
              </button>
            ))}
          </div>

          {/* Selector de Modalidad con "Pills" */}
          <div className={styles.contenedorModalidad}>
            <p>Modalidad de entrenamiento:</p>
            <div className={styles.pills}>
              {opcionesModalidad.map((mod) => (
                <button
                  key={mod}
                  type="button"
                  className={`${styles.pill} ${modalidad === mod ? styles.pillActiva : ""}`}
                  onClick={() => setModalidad(mod)}
                >
                  {mod}
                </button>
              ))}
            </div>
          </div>

          <input 
            type="text" 
            placeholder="Tu nombre completo" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required 
          />
          
          <textarea 
            placeholder="Cuéntanos cómo ha sido tu progreso con el Coach Diego..." 
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            required
          />

          <button type="submit" className={styles.botonEnviar}>
            Publicar Testimonio
          </button>
        </form>
      )}
    </section>
  );
}