import TestimoniosMuro from "../../components/TestimoniosMuro";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PaginaTestimonios() {
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
      <TestimoniosMuro />
    </main>
  );
}