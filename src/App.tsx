import { Navbar } from '@/components/ui/shadcn-io/navbar';
import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getText = async () => {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      
      if (!apiKey) {
        console.error('OpenAI API key is missing. Please ensure VITE_OPENAI_API_KEY is set in your .env file and restart the dev server.');
        return;
      }
      
      try {
        const openaiProvider = createOpenAI({ apiKey });
        const { text } = await generateText({
          model: openaiProvider('gpt-5-nano'),
          prompt: 'What is an agent?',
        });
        console.log(text);
      } catch (error) {
        console.error('Error generating text:', error);
      }
    }
    getText();
  }, []);

  return (
    <div className="flex flex-col items-center justify-between w-screen h-screen">
      <Navbar />
    </div>
  )
}

export default App
