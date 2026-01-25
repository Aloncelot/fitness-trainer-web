"use client";
import { Instagram, Facebook, MessageCircle, Twitter } from "lucide-react";
import styles from "./Footer.module.scss";

export default function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <h3>Coach <span style={{ color: "#ff0000" }}>Diego</span> Fitness</h3>
        <p>Entrenamiento de élite para resultados reales.</p>
      </div>

      <div className={styles.sociales}>
        <a href="#" aria-label="Instagram">
          <Instagram size={24} />
        </a>
        <a href="#" aria-label="Facebook">
          <Facebook size={24} />
        </a>
        <a href="#" aria-label="WhatsApp">
          <MessageCircle size={24} />
        </a>
        <a href="#" aria-label="Twitter">
          <Twitter size={24} />
        </a>
      </div>

      <div className={styles.copyright}>
        © {anioActual} Todos los derechos reservados. Creado por Alonso Correa.
      </div>
    </footer>
  );
}