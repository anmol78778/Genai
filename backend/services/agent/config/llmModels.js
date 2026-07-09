import { ChatGroq } from "@langchain/groq"
import dotenv from "dotenv";

dotenv.config();

const grok = new ChatGroq({
    model: "openai/gpt-oss-120b",
    temperature: 0,
    maxTokens: undefined,
    maxRetries: 2,
    // other params...
})

import { ChatGoogleGenerativeAI } from "@langchain/google-genai"

const llm = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-pro",
    temperature: 0,
    maxRetries: 2,
    // other params...
})


export const getModel =
  (agent) => {

    switch (agent) {

      case "coding":
        return gemini;

      case "image":
        return groq;

      case "search":
        return groq;

      case "chat":
        return groq;
      case "vision":
        return gemini;
      default:
        return groq;

    }

  }