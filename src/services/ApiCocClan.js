// services/cocApiService.js
const axios = require('axios');

const obtenerInformacionDelClan = async (etiquetaDelClan, token) => {
  try {
    const url = `https://api.clashofclans.com/v1/clans/${encodeURIComponent(etiquetaDelClan)}`;
    const respuesta = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return respuesta.data;
  } catch (error) {
    console.error('Error al obtener información del clan:', error);
    throw error;
  }
};

module.exports = { obtenerInformacionDelClan };
