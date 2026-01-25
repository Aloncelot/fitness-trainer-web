"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./Suplementos.module.scss";
import { useCart } from "@/context/CartContext";


const productos = [
  { id: 1, nombre: "Iso Whey Protein", cat: "Proteínas", precio: "$1,299", img: "/suplementos/cbum-itholte-frosted.png" },
  { id: 2, nombre: "Creatina Monohidratada", cat: "Creatinas", precio: "$650", img: "/suplementos/creatinaEvogen.webp" },
  { id: 3, nombre: "Pre-Workout Explosive", cat: "Pre-entrenos", precio: "$890", img: "/suplementos/DPvenomLimon.webp" },
  { id: 4, nombre: "BCAA Aminoácidos", cat: "Aminoácidos", precio: "$550", img: "/suplementos/ghostBCAA.webp" },
  { id: 5, nombre: "Multivitamínico Pro", cat: "Varios", precio: "$420", img: "/suplementos/ONVitamin.webp" },
];

export default function Suplementos() {
  const { addToCart } = useCart();
  const [filtro, setFiltro] = useState("Todos");
  const categorias = ["Todos", "Proteínas", "Creatinas", "Pre-entrenos", "Varios"];

  const productosFiltrados = filtro === "Todos" 
    ? productos 
    : productos.filter(p => p.cat === filtro);

  return (
    <section className={styles.seccionTienda}>
      <h1>Suplementación <span>Top Tier</span></h1>

      <div className={styles.filtros}>
        {categorias.map(c => (
          <button 
            key={c} 
            className={filtro === c ? styles.activo : ""}
            onClick={() => setFiltro(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className={styles.gridProductos}>
        <AnimatePresence mode="popLayout">
          {productosFiltrados.map((prod) => (
            <motion.div
              key={prod.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={styles.tarjetaProducto}
            >
              <div className={styles.contenedorImagen}>
                <Image src={prod.img} alt={prod.nombre} fill />
              </div>
              <div className={styles.info}>
                <small>{prod.cat}</small>
                <h3>{prod.nombre}</h3>
                <p className={styles.precio}>{prod.precio}</p>
              </div>
              <button onClick={()=>addToCart(prod)}>Agregar al carrito</button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}