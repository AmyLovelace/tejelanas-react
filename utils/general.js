// Esta función formatea un RUT agregando puntos y guión
export const formatRUT = (rut) => {
    // Separar la parte numérica del dígito verificador
    const rutSinVerificador = rut.slice(0, -1);
    const verificador = rut.slice(-1);

    // Agregar puntos al RUT
    let rutFormateado = rutSinVerificador.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Agregar guión y dígito verificador
    rutFormateado = rutFormateado + '-' + verificador;

    return rutFormateado;
}

// Esta función recibe un string y le añade un guión "_" antes del último caracter
export const formatUltMatricula = (string) => {
    return string.slice(0, -1) + '-' + string.slice(-1);
}


export const getPastelColor = (color) => {
    const pastelMap = {
        crema: '#fdf6e3',
        verde: '#d0f0c0',
        'verde esmeralda': '#c8f2e0',
        azul: '#cce4f6',
        fucsia: '#fbd3e9',
        beige: '#f5f5dc',
        magenta: '#fbc2eb',
        rojo: '#f8c6c6',
        amarillo: '#fff9c4',
        naranja: '#ffe0b2',
        violeta: '#e1bee7',
        gris: '#e0e0e0',
        negro: '#cccccc',
        blanco: '#ffffff',
      };
    
      return pastelMap[color.toLowerCase()] || '#eeeeee'; 
}
