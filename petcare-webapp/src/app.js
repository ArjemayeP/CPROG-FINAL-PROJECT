const express = require('express');
const bodyParser = require('body-parser');
const petController = require('./controllers/petController');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.get('/pets', petController.getAllPets);
app.get('/pets/:id', petController.getPetById);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});