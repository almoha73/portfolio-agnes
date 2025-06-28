const axios = require('axios');

module.exports = async (req, res) => {
  const { city } = req.query;
  const apiKey = process.env.OPENWEATHER_API_KEY; // Vercel injecte les variables d'environnement
  const country = "FR";

  if (!city) {
    return res.status(400).json({ error: 'City parameter is required.' });
  }

  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;
    const response = await axios.get(apiUrl);
    
    // Ajouter les en-têtes CORS pour permettre les requêtes depuis votre frontend
    res.setHeader('Access-Control-Allow-Origin', '*'); // À ajuster pour la production
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: 'Failed to fetch weather data.' });
    }
  }
};