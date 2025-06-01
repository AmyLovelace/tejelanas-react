import Hero from "../src/components/Hero/Hero";
import { Box } from "@mui/material";
import ContactForm from "../src/components/ContactForm/ContactForm";
import { useEffect } from "react";
import { useScrollContext } from "../src/context/ScrollContext";
import Map from "../src/components/Map/Map";
import ProductSlider from "../src/components/ProductSlider/ProductSlider";
import ServiceSlider from "../src/components/ServiceSlider/ServiceSlider";
import AboutUsSection from "../src/components/AboutUs/AboutUsSection";
import FAQSection from "../src/components/Faq/FaqSection";

const Home = () => {
  const { setActiveSection,sectionRefs } = useScrollContext();

  useEffect(() => {
    const sections = [
      { id: "Inicio", ref: sectionRefs.Inicio },
      { id: "Servicios", ref: sectionRefs.Servicios },
      { id: "Productos", ref: sectionRefs.Productos },
      { id: "Contacto", ref: sectionRefs.Contacto },
      { id: "Mapa", ref: sectionRefs.Mapa },
      { id: "Nosotros", ref: sectionRefs.Nosotros },
      { id: "Preguntas", ref: sectionRefs.Preguntas }


    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = sections.find(s => s.ref.current === entry.target)?.id;
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [setActiveSection]);
  
  return (
    <Box component={'div'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Hero id="Inicio" ref={sectionRefs.Inicio}/>
        <AboutUsSection id="Nosotros" ref={sectionRefs.Nosotros}/>
        <ProductSlider id="Productos" ref={sectionRefs.Productos} />
        <ServiceSlider id="Servicios" ref={sectionRefs.Servicios}/>
        <FAQSection id="Preguntas" ref={sectionRefs.Preguntas}/>
        <ContactForm id="Contacto" ref={sectionRefs.Contacto}/>
        <Map id="Mapa" ref={sectionRefs.Mapa}/>
        
    </Box>
  );
}

export default Home;