import { GoogleGenerativeAI } from "@google/generative-ai";
// import dotenv from 'dotenv'
// dotenv.config();
const genAI = new GoogleGenerativeAI("AIzaSyDZLY6nYjRcPFAbZtC0nZ2aAzx74sI1LrY");

export async function runChat(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-001" });

  const result = await model.generateContent([prompt]); // ✅ Change here
  console.log(result.response.text());
  return result.response.text();
}

export default runChat;