"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Check, X, Trash2, ShieldCheck, LogOut } from "lucide-react";
import Link from "next/link";

export default function PanelAdminTestimonios() {
  const [testimonios, setTestimonios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const router = useRouter(); // <-- Agregamos el router

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    try {
      const res = await fetch('/api/admin/testimonios');
      const data = await res.json();
      setTestimonios(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setCargando(false);
    }
  };

  // Función para cerrar sesión
  const cerrarSesion = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login'); // Lo mandamos pa' fuera
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  const toggleAprobacion = async (id, estadoActual) => {
    try {
      setTestimonios(testimonios.map(t => t.Id === id ? { ...t, Aprobado: !estadoActual } : t));
      
      await fetch('/api/admin/testimonios', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, aprobado: !estadoActual })
      });
    } catch (error) {
      console.error("Error al actualizar:", error);
      cargarDatos();
    }
  };

  const eliminarTestimonio = async (id) => {
    if (!window.confirm("¿Estás seguro de que quieres eliminar esta reseña para siempre?")) return;

    try {
      setTestimonios(testimonios.filter(t => t.Id !== id));
      
      await fetch('/api/admin/testimonios', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
    } catch (error) {
      console.error("Error al eliminar:", error);
      cargarDatos();
    }
  };

  return (
    <main style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px' }}>
        <h1 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.8rem' }}>
          <ShieldCheck color="#e63946" size={32} />
          Panel de Control: Testimonios
        </h1>
        
        {/* Nuevo bloque de botones en la cabecera */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link href="/" style={{ color: '#4ade80', textDecoration: 'none', fontSize: '0.95rem' }}>Ver sitio público</Link>
          
          <button 
            onClick={cerrarSesion}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              background: 'rgba(230, 57, 70, 0.1)', 
              border: '1px solid #e63946', 
              color: '#e63946', 
              padding: '10px 15px', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            <LogOut size={16} /> Salir
          </button>
        </div>
      </div>

      {cargando ? (
        <p>Cargando base de datos...</p>
      ) : (
        <div style={{ overflowX: 'auto', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '20px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            {/* ... el resto de tu tabla sigue exactamente igual ... */}
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th style={{ padding: '15px' }}>Fecha</th>
                <th style={{ padding: '15px' }}>Atleta</th>
                <th style={{ padding: '15px' }}>Comentario</th>
                <th style={{ padding: '15px' }}>Rating</th>
                <th style={{ padding: '15px', textAlign: 'center' }}>Estado</th>
                <th style={{ padding: '15px', textAlign: 'center' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {testimonios.map((t) => (
                <tr key={t.Id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '15px', fontSize: '0.85rem', color: '#aaa' }}>
                    {new Date(t.Fecha).toLocaleDateString()}
                  </td>
                  <td style={{ padding: '15px', fontWeight: 'bold' }}>{t.Nombre}</td>
                  <td style={{ padding: '15px', maxWidth: '300px', fontSize: '0.9rem' }}>{t.Comentario}</td>
                  <td style={{ padding: '15px', color: '#f1c40f' }}>{t.Calificacion} ★</td>
                  <td style={{ padding: '15px', textAlign: 'center' }}>
                    <span style={{ 
                      padding: '5px 10px', 
                      borderRadius: '20px', 
                      fontSize: '0.8rem',
                      background: t.Aprobado ? 'rgba(74, 222, 128, 0.2)' : 'rgba(230, 57, 70, 0.2)',
                      color: t.Aprobado ? '#4ade80' : '#e63946'
                    }}>
                      {t.Aprobado ? 'Público' : 'Oculto'}
                    </span>
                  </td>
                  <td style={{ padding: '15px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button 
                      onClick={() => toggleAprobacion(t.Id, t.Aprobado)}
                      style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '8px', borderRadius: '5px', cursor: 'pointer' }}
                      title={t.Aprobado ? "Ocultar" : "Aprobar"}
                    >
                      {t.Aprobado ? <X size={18} /> : <Check size={18} color="#4ade80" />}
                    </button>
                    <button 
                      onClick={() => eliminarTestimonio(t.Id)}
                      style={{ background: 'rgba(230, 57, 70, 0.1)', border: '1px solid #e63946', color: '#e63946', padding: '8px', borderRadius: '5px', cursor: 'pointer' }}
                      title="Eliminar"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}