import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { mainprocess } from './mainprocess.js';


const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

app.use(cors());

app.use(express.json());

const port = process.env.PORT || 8001;
const apikey = process.env.APIKEY;
console.log(`Loaded API Key: ${process.env.APIKEY}`);


console.log(`API Key: ${apikey}`);
console.log(`Port: ${port}`);

app.use(express.static('dist'));

app.get("/", (req, res) => {
    res.render("index.html")
});


app.post("/", async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: "URL parameter is missing" });
    }
    try {
        const result = await mainprocess(url, apikey);
        //console.log("Result from mainprocess:", result);
        if (result.error) {
            return res.status(500).json(result);
        }
        // If no errors, send the successful result
        res.json(result);
        console.log(`API Key: ${apikey}, Port: ${port}`);
    } catch (error) {
        console.error("Unexpected error in processing:", error);
        res.status(500).json({ error: "An unexpected error occurred", details: error.message });
    } 
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

