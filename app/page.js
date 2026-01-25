import Hero from "@/components/Hero";
import Proceso from "@/components/Proceso";
import AboutMe from "@/components/AboutMe";
import Servicios from "@/components/Servicios";
import Transformaciones from "@/components/Transformaciones";
import Opiniones from "@/components/Opiniones";
import Contacto from "@/components/Contacto";
import Precios from "@/components/Precios";
import TiendaPreview from "@/components/TiendaPreview";
import Faqs from "@/components/Faqs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Proceso />
      <AboutMe />
      <Servicios />
      <Transformaciones />
      <Opiniones />
      <Precios />
      <TiendaPreview />
      <Contacto />
      <Faqs />
    </main>
  );
}