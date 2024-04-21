// controllers/controller.js
const apiService = require('../services/ApiCocClan');

const mainController = {
  home: async (req, res) => {
    try {
      // Coloca tu etiqueta de clan y tu clave de API aquí
      const etiquetaDelClan = '#82YV82UO';
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjFhZTM4ZjViLThjYTgtNGU1NC04ZWMxLWJkMWRlYzM1ZDYwYSIsImlhdCI6MTcwNjAyNjQwOSwic3ViIjoiZGV2ZWxvcGVyL2RiN2Q5MGMzLWY2Y2EtY2UwZi0yNTlmLTc1YmJkZTk4ZWVhYyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE3OS42Mi44OS4yMjMiXSwidHlwZSI6ImNsaWVudCJ9XX0.PPnKuXwR29Bm9h7ClK8k9KagPiQIKqMTNaAMcl0XKIYPW-IzGaknx1TsDk7oYcBsjGW2wDcdVBUmtTkAtBvzBw';

      const informacionDelClan = await apiService.obtenerInformacionDelClan(etiquetaDelClan, token);
      
      console.log(informacionDelClan);

      // Lógica para renderizar la vista con los datos del clan
      res.render('coc', { informacionDelClan});  // Corregir aquí el nombre de la vista si es diferente
    } catch (error) {
      // Manejar errores
      console.error('Error en el controlador:', error);
      res.status(500).send('Error al obtener información del clan');
    }
  },
};

module.exports = mainController;