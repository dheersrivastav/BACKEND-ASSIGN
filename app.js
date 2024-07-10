const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const verifyTokenRoutes= require('./src/routes/verifyToken')
const dataRoutes = require('./src/routes/data');
const userRoutes = require('./src/routes/user');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', dataRoutes);
app.use('/api', userRoutes);
app.use('/api', verifyTokenRoutes);

app.use((req, res) => {
    res.status(404).send('Route not found');
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
