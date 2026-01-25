"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import styles from "./Carrito.module.scss";
import { useCart } from "@/context/CartContext"; // Importamos el contexto

export default function Carrito() {
  // Extraemos los datos y funciones del contexto global
  const { isCartOpen, toggleCart, cartItems, removeFromCart } = useCart();

  // Lógica para calcular el total dinámicamente
  const total = cartItems.reduce((acc, item) => {
    // Limpiamos el string del precio para convertirlo a número (ej: "$1,299" -> 1299)
    const precioNumerico = parseFloat(item.precio.replace('$', '').replace(',', ''));
    return acc + precioNumerico;
  }, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Fondo oscuro con click para cerrar */}
          <motion.div 
            className={styles.overlay} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
          />

          {/* Panel Lateral */}
          <motion.div 
            className={styles.carritoPanel}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className={styles.header}>
              <h2>Tu Carrito ({cartItems.length})</h2>
              <button onClick={toggleCart}><X size={24} /></button>
            </div>

            <div className={styles.listaProductos}>
              {cartItems.length === 0 ? (
                <div className={styles.carritoVacio}>
                  <p>Tu carrito está vacío</p>
                  <button onClick={toggleCart}>Continuar comprando</button>
                </div>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index} className={styles.item}>
                    <div className={styles.imagenMini}>
                      <Image src={item.img} alt={item.nombre} fill />
                    </div>
                    <div className={styles.detalles}>
                      <h4>{item.nombre}</h4>
                      <p>{item.precio}</p>
                    </div>
                    {/* Botón para eliminar un producto específico */}
                    <button 
                      className={styles.eliminar} 
                      onClick={() => removeFromCart(index)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Mostrar el total solo si hay productos */}
            {cartItems.length > 0 && (
              <div className={styles.footer}>
                <div className={styles.total}>
                  <span>Total a pagar:</span>
                  <span>${total.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
                </div>
                <button className={styles.botonPago}>
                  <ShoppingBag size={20} />
                  Finalizar Compra
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}