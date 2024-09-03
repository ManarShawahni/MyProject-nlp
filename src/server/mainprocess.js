import axios from "axios";
const meaningcloudURL = "https://api.meaningcloud.com/sentiment-2.1";

export const mainprocess = async (url, apikey) => {
    // Validate URL
    let ValidUrl;
    try {
        new URL(url);
        ValidUrl = true;
    } catch (_) {
        ValidUrl = false;
    }

    // Check the URL validity
    if (!ValidUrl) {
        console.error("Provided URL is not valid.");
        return { error: "Invalid URL format. Please provide a valid URL." };
    }
    try {
        console.log(`Making API request to: ${meaningcloudURL}?key=${apikey}&url=${url}&lang=en`);
        const response = await axios.get(`${meaningcloudURL}?key=${apikey}&url=${url}&lang=en`);
        console.log("API Response:", response.data);
        const data = response.data;
        // Check if the API returned a successful code
        if (data.status.code === "0") {
            return TheResponse(data); 
        } else {
            return { error: "API returned an error", details: data.status.msg };
        }
    } catch (error) {
        console.error("Error making the API request:", error.message);
        return { error: "Failed to retrieve data from the API. Please check the URL and API key." };
    }
};


const TheResponse = (data) => {
    return {
        success: true,
        data: {
            score_tag: data.score_tag,
            agreement: data.agreement,
            subjectivity: data.subjectivity,
            confidence: data.confidence,
            irony: data.irony
            }
        };
};

/*
const dummyData = {
    score_tag: "P+",
    agreement: "AGREEMENT",
    subjectivity: "OBJECTIVE",
    confidence: "100",
    irony: "NONIRONIC",
    status: {
        code: "0",
        msg: "OK"
    }
};
 
const response = TheResponse(dummyData);
console.log(response);

*/