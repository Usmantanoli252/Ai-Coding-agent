
require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GEMINI_KEY,
});

async function generateContent(prompt) {
    try {
        const result = await ai.models.generateContent({
            model: "gemini-3.6-flash",
            systemInstruction:`
            act as senior software enginer review my code:
            -How can i make it better
            -Identify the bugs 
            -Make it scalable 
            -Suggest the best approch
            -make it simple and easy to under stand
            `,
            contents:prompt
        });

        return result.text;
    } catch (error) {
        console.error("Gemini API Error:", error);
        throw error;
    }
}

module.exports = generateContent;