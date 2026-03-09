"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight } from "lucide-react";
import styles from "./Login.module.scss";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setCargando(true);
    setError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        // Redirige al panel si la clave es correcta
        router.push("/admin/testimonios");
      } else {
        setError("Contraseña incorrecta. Acceso denegado.");
      }
    } catch (err) {
      setError("Error de conexión.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <main className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <Lock size={48} className={styles.iconoLock} />
        <h1>Acceso Restringido</h1>
        <p>Ingresa la clave maestra para administrar el contenido.</p>
        
        <form onSubmit={handleLogin} className={styles.form}>
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
          
          {error && <span className={styles.errorMensaje}>{error}</span>}

          <button 
            type="submit" 
            disabled={cargando}
            className={styles.botonEntrar}
          >
            {cargando ? "Verificando..." : "Entrar al Panel"} <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </main>
  );
}