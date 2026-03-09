import CasosExito from "@/components/CasosExito";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PaginaCasos() {
  return (
    <main style={{ paddingTop: '100px' }}>
    <div className="container-volver">
    <Link href="/" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '10px', 
        color: '#e63946', 
        textDecoration: 'none',
        marginBottom: '20px',
        fontWeight: 'bold'
    }}>
    <ArrowLeft size={20} />
    Volver a la página principal
    </Link>
    </div>
      <CasosExito />

    </main>
  );
}