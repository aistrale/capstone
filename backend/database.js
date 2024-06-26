const mongoose = require('mongoose');

const initDatabaseConnection = () => {
    try {
        mongoose.connect(process.env.DB_URL)
        const database = mongoose.connection

        database.on('error', console.error.bind(console, 'Connection to database failed'));
        database.once('open', () => {console.log('Connected to database')})

    } catch (error) {
        console.log(error.message)
    }
}

module.exports={initDatabaseConnection}