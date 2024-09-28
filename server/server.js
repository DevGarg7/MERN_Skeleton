import app from './express'; // Import the configured Express app
import mongoose from 'mongoose';
import config from './../config/config.js'; // Make sure the path is correct
import Template from './../template';

mongoose.Promise = global.Promise;

mongoose.connect(config.mongoUri)
    .then(() => {
        console.info('Connected to MongoDB successfully');
    })
    .catch(err => {
        console.error(`MongoDB connection error: ${err.message}`);
    });

mongoose.connection.on('error', (err) => {
    throw new Error(`Unable to connect to database: ${err.message}`);
});

app.get('/', (req, res) => {
    res.status(200).send(Template());
});

// Start the server
app.listen(config.port, (err) => {
    if (err) {
        console.log(err); // Log any error that occurs when starting the server
    }
    console.info('Server started on port %s.', config.port); // Log the server start message
});
