"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const {toggleCart, cartItems} = useCart();
  const totalItems = cartItems.length

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (id) => (id === "inicio" ? "/" : `/#${id}`);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.contenedor}>
        <Link href="/" className={styles.logo}>
          COACH <span>DIEGO</span>
        </Link>

        <nav className={styles.nav}>
          <Link href={getHref("inicio")}>Inicio</Link>
          <Link href={getHref("acerca")}>Acerca</Link>
          <Link href={getHref("servicios")}>Servicios</Link>
          <Link href={getHref("transformaciones")}>Resultados</Link>
          <Link href={getHref("precios")}>Planes</Link>
          <Link href={getHref("suplementos")}>Suplementos</Link>
          <Link href={getHref("contacto")} className={styles.ctaNavbar}>
            Contacto
          </Link>
          <button onClick={toggleCart} className={styles.botonCarrito}>
            <ShoppingCart size={24} strokeWidth={2} />
            {totalItems > 0 && (
              <span className={styles.badge}>{totalItems}</span>
            )}
          </button>
        </nav>
      </div>
    </motion.header>
  );
}