const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/clashofclans', async (req, res) => {
    try {
        const apiUrl = 'https://api.clashofclans.com' + req.url;
        const response = await axios.get(apiUrl, {
            headers: {
                'Authorization': req.headers.authorization
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

// Configura Express para manejar todas las demás rutas y devolver el archivo HTML
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'coc.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor proxy CORS en http://localhost:${PORT}`);
});
