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
