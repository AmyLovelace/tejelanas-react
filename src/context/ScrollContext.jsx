import { createContext, useState, useContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('Inicio');

  const sectionRefs = {
    Inicio: useRef(null),
    Contacto: useRef(null),
    Mapa: useRef(null),
    Productos:useRef(null),
    Servicios: useRef(null),
    Nosotros:useRef(null),
    Preguntas:useRef(null),

  };

  const scrollToSection = (id) => {
    const ref = sectionRefs[id];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <ScrollContext.Provider value={{ activeSection, setActiveSection, sectionRefs, scrollToSection  }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);