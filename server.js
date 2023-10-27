const express = require('express');
const cors = require('cors');

const tutorialRouter = require('./routes/tutorialRoutes');

const app = express();

let corsOptions = { origin: 'http://localhost:8080' };

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to hero application.' });
});

// require('./app/routes/tutorialRoutes.js')(app);
app.use('/api/v1', tutorialRouter);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
