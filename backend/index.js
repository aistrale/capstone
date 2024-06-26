require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3030;
const { initDatabaseConnection } = require('./database')
initDatabaseConnection()

app.use(cors());
app.use(express.json());

const authEndpoint = require('./routes/authRoutes');
app.use(authEndpoint);

const jobEntryEndpoint = require('./routes/jobEntryRoutes');
app.use(jobEntryEndpoint)

const recruiterEndpoint = require('./routes/recruiterRoutes');
app.use(recruiterEndpoint)

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`))