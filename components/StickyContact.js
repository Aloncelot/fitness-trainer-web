"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import styles from "./StickyContact.module.scss";

export default function StickyContact() {
  return (
    <motion.div 
      className={styles.contenedorSticky}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link href="/#contacto" className={styles.boton}>
        <MessageCircle size={28} />
        <span className={styles.tooltip}>¡Contáctame!</span>
      </Link>
    </motion.div>
  );
}