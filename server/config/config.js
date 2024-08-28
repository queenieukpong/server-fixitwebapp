// server/config/config.js

import dotenv from 'dotenv';
dotenv.config(); // Ensure this is at the top to load .env file

// Export configuration variables
export const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/FixitWebApp';
export const JWT_SECRET = process.env.JWT_SECRET || 'aufm7CwNwpKaaptqWjTJUz0IsQKoQ5q2ITAh/QSLzbhV69LWLui08X0qOZZ13OOakt/AfVJp0DWBn5w6r+tDRFtSVGEL3bF7V7H/+hsUYWvq0pBLZX1PxN2DjHdvhrVs5xPvUHBxe1fnmLMMBO7cYrKzvIEmmpqcU+xGujwU6k6v/C4zgtyaxDtYPyFgGNt1bdmDeTTTUngJL5UCQ5VLC7aJEoAvQKd4w0/pOpm3gJum0CmcluI4ES86SSsArKVWtuD0uqcyGf3B0rOWmAl+BtI3MrWgmrpRd0wUuZJs9O6Xxl+FSJ68/n82IWyAARHDgP+DmTX3zp/6RfnJKBpKsA==';
export const PORT = process.env.PORT || 5000;


