
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSpaAssistantResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `You are the friendly AI Concierge for Malia's Salon & Spa in Silay City. 
        Malia's offers Swedish Massage (₱500), Body Scrubs (₱350), and various other spa services.
        We have special discounts (20%) for Seniors, PWDs, Students, and First Responders.
        Our philosophy is "Massage as Therapy". We emphasize that body contact is essential for mental, emotional, and physical health.
        Tell users about how massage alleviates stress, regulates the nervous system, and boosts serotonin.
        Our address is Generoso Gamboa St., Corner Mabini St., Silay City.
        Our phone is 9627068461.
        Be helpful, warm, and professional. Keep responses concise and focused on spa services and wellness benefits.`,
        temperature: 0.7,
        topP: 0.8,
      },
    });

    return response.text || "I'm sorry, I'm having trouble connecting to the spa reception right now. Please call us at 9627068461!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. Please call us for immediate assistance.";
  }
};
