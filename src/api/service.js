// services/apiService.js

const API_URL_BASE = 'https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1'; 


/**
 * Obtiene datos de la API usando Bearer Token
 * @returns {Promise<any>}
 */
export async function getProductServices() {
  try {
    const response = await fetch(`${API_URL_BASE}/products-services/`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ipss.get'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
}

/**
 * Obtiene datos de la API usando Bearer Token
 * @returns {Promise<any>}
 */
export async function getAboutUs() {
    try {
      const response = await fetch(`${API_URL_BASE}/about-us/`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ipss.get'
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
  
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error;
    }
  }
  
  /**
 * Obtiene datos de la API usando Bearer Token
 * @returns {Promise<any>}
 */
export async function getFaq() {
    try {
      const response = await fetch(`${API_URL_BASE}/faq/`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ipss.get'
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
  
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error;
    }
  }
