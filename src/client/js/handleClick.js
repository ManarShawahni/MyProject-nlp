import axios from "axios";
import {UrlValidation} from './UrlValidation.js';

const form = document.querySelector("form");
const errorElement = document.getElementById('error'); 


const handleClick = async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const urlInput = document.getElementById('url').value; 

      if (!urlInput.trim()) {
        clearResults();
        errorHandler('Input cannot be empty. Please enter a URL.');
        return;
    }
    
    if (!UrlValidation(urlInput)) {
        errorHandler('Please enter a valid URL');
        clearResults();
        return;
    }

    try {
        const response = await axios.post('http://localhost:8001', { url: urlInput }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log("Data received from server:", response.data);

        if (response.data.error) {
            errorHandler(response.data.error);
            return;
        }

        if (!response.data.data) {
            errorHandler('Data is missing.');
            return;
        }

        display(response.data.data);

    } catch (error) {
        console.error('Error making the request:', error);
        errorHandler('Error making the request.');
    }
}

const errorHandler = (message) => {
    errorElement.textContent = message;
    errorElement.style.display = 'block';  
}

const display = (data) => {
    document.getElementById("agreement").textContent = `Agreement: ${data.agreement || 'N/A'}`;
    document.getElementById("subjectivity").textContent = `Subjectivity: ${data.subjectivity || 'N/A'}`;
    document.getElementById("confidence").textContent = `Confidence: ${data.confidence || 'N/A'}`;
    document.getElementById("irony").textContent = `Irony: ${data.irony || 'N/A'}`;
    document.getElementById("score_tag").textContent = `Score Tag: ${data.score_tag || 'N/A'}`;
};

// Function to clear results from display
const clearResults = () => {
    const resultFields = ["agreement", "subjectivity", "confidence", "irony", "score_tag"];
    resultFields.forEach(field => {
        document.getElementById(field).textContent = '';
    });
};

export { handleClick };
