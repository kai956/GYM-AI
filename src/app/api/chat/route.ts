// @ts-ignore
import { GoogleGenerativeAI } from '@google/generative-ai';
import { exercises } from '../../../data/exercises';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Create a more focused system prompt
const SYSTEM_PROMPT = `You are a knowledgeable fitness AI assistant. Your responses should focus on:
1. Providing accurate exercise information from our database
2. Offering safe, general fitness advice
3. Avoiding medical advice or extreme recommendations
4. Keeping responses focused on fitness and well-being

When discussing exercises from our database, use exact information. For other topics, provide general, safe guidance.`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    const userMessage = messages[messages.length - 1];

    // Configure the model with safety settings
    const model = genAI.getGenerativeModel({
      model: 'gemini-pro',
      safetySettings: [
        {
          category: 'HARM_CATEGORY_HARASSMENT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
        {
          category: 'HARM_CATEGORY_HATE_SPEECH',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
        {
          category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
        {
          category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
      ],
    });

    // Start chat and send system prompt
    const chat = model.startChat();
    await chat.sendMessage(SYSTEM_PROMPT);
    
    // Send user message and get response
    const result = await chat.sendMessage(userMessage.content);
    const response = await result.response;
    
    try {
      const text = await response.text();
      return Response.json({ role: 'assistant', content: text });
    } catch (error) {
      console.error('Text generation error:', error);
      return Response.json({
        role: 'assistant',
        content: 'I apologize, but I need to keep my response focused on safe, helpful fitness guidance. Could you please rephrase your question about exercise or fitness?'
      });
    }

  } catch (error) {
    console.error('Chat API Error:', error);
    return Response.json({
      role: 'assistant',
      content: 'I apologize, but I encountered an error. Please try asking your question again, focusing on exercise and fitness topics.'
    }, { status: 200 });
  }
} 