"use client";
import { Instagram, Facebook, MessageCircle, Twitter, Lock, Terminal } from "lucide-react";
import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <h3>Coach <span style={{ color: "#e63946" }}>Diego</span> Fitness</h3>
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
        
      </div>

      {/* Nueva barra inferior estilo Quasar Devs */}
      <div className={styles.barraInferior}>
        <div className={styles.copyright}>
          © {anioActual} Coach Diego Fitness. Todos los derechos reservados.
        </div>
        
        <div className={styles.creditos}>
          <a 
            href="https://quasar-devs.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.enlaceQuasar}
          >
            <Terminal size={14} /> Built by QUASAR DEVS
          </a>
          
          <Link href="/admin/testimonios" className={styles.enlaceAdmin}>
            <Lock size={14} /> Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}