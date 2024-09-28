import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

// Middleware configuration
app.use(compress()); // Compress all responses
app.use(helmet()); // Secure the app by setting various HTTP headers
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(cookieParser()); // Parse cookies from the request

// Export the configured Express app
export default app;
