"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import styles from "./Contacto.module.scss";
import Toast from "./Toast";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false); 
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setEnviado(true); 
    reset(); 
  };

  return (
    <section id="contacto" className={styles.seccionContacto}>
      <div className={styles.contenedorContacto}>      
        
        <motion.div 
          className={styles.datosDirectos}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Contacto <span>Directo</span></h2>
          <div className={styles.dato}>
            <Phone color="#e63946" />
            <div>
              <h4>Teléfono</h4>
              <p>+52 55 1234 5678</p>
            </div>
          </div>
          <div className={styles.dato}>
            <Mail color="#e63946" />
            <div>
              <h4>Email</h4>
              <p>diego.sandoval@coach.com</p>
            </div>
          </div>
          <div className={styles.dato}>
            <MapPin color="#e63946" />
            <div>
              <h4>Ubicación</h4>
              <p>CDMX, México</p>
            </div>
          </div>
        </motion.div> 

        <div className={styles.columnaDerecha}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            ¿Listo para el cambio?
          </motion.h2>

          <motion.form 
            className={styles.formulario}
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, scale: 0.95 }}   
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.campo}>
              <label>Nombre Completo</label>
              <input 
                {...register("nombre", { required: "El nombre es obligatorio" })} 
                placeholder="Tu nombre"
              />
              {errors.nombre && <span className={styles.error}>{errors.nombre.message}</span>}
            </div>

            <div className={styles.campo}>
              <label>Correo Electrónico</label>
              <input 
                type="email"
                {...register("email", { 
                  required: "Email requerido",
                  pattern: { value: /^\S+@\S+$/i, message: "Email inválido" }
                })} 
                placeholder="correo@ejemplo.com"
              />
              {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            </div>

            <div className={styles.campo}>
              <label>Tu Objetivo</label>
              <select {...register("objetivo")}>
                <option value="volumen">Ganar Masa Muscular (Volumen)</option>
                <option value="definicion">Quemar Grasa (Definición)</option>
                <option value="mantenimiento">Mantenimiento / Salud</option>
              </select>
            </div>

            <div className={styles.campo}>
              <label>Cuéntame más de ti (lesiones, experiencia...)</label>
              <textarea {...register("mensaje")} placeholder="Escribe aquí..." />
            </div>

            <button type="submit">Enviar Solicitud</button>
          </motion.form>
        </div>
      </div>     

      <Toast 
        mensaje="¡Solicitud enviada con éxito! El coach Diego se pondrá en contacto contigo." 
        visible={enviado} 
        setVisible={setEnviado} 
      />
    </section>
  );
}