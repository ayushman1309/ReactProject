// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } from "@google/generative-ai";

// const MODEL_NAME = "gemini-1.5-pro";
// const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // ✅ from .env

// async function runChat(prompt) {
//   console.log("API Key loaded:", API_KEY ? "✅ Yes" : "❌ No"); // Debug

//   const genAI = new GoogleGenerativeAI(API_KEY);
//   const model = genAI.getGenerativeModel({ model: MODEL_NAME });

//   const chat = model.startChat({
//     generationConfig: {
//       temperature: 0.9,
//       maxOutputTokens: 2048,
//     },
//     safetySettings: [
//       {
//         category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//       },
//     ],
//     history: [],
//   });

//   const result = await chat.sendMessage(prompt);
//   return result.response.text();
// }

// export default runChat;
// gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";
// import dotenv from 'dotenv'
// dotenv.config();
const genAI = new GoogleGenerativeAI("AIzaSyDZLY6nYjRcPFAbZtC0nZ2aAzx74sI1LrY");

export async function runChat(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-001" });

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return result.response.text();
}

export default runChat; // ✅ now default export exists
