
import { useState } from 'react';
import './App.css'
import { URL } from './constants';

function App() {
  const [question , setQuestion ] = useState('');
  const [result , setResult] = useState(undefined);
  let payload = {
  "contents": [{
    "parts":[{"text": "Explain how AI works"}]
    }]
   }
const formatGeminiResponse = (rawText) => {
  return (
    "<p>" +
    rawText
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold
      .replace(/\*(.*?)\*/g, "<em>$1</em>") // Italic
      .replace(/\n\n/g, "</p><p>") // Paragraphs
      .replace(/\n/g, "<br>") + // Line breaks
    "</p>"
  );
};

const askQuestion = async () => {
  try {
    let response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();

    const rawText =
      response?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response found.";
    const formattedHTML = formatGeminiResponse(rawText);

    setResult(formattedHTML); // send HTML to your UI
  } catch (error) {
    console.error("Error while fetching Gemini response:", error);
    setResult("<p style='color:red;'>Something went wrong!</p>");
  }
};

  return (
    <>
      <div className="grid grid-cols-5 h-screen text-center">
        <div className="col-span-1 bg-zinc-800">
          <h1>kd</h1>
        </div>
        <div className="col-span-4">
          <div className="container h-120 p-5">
            <div className="overflow-y-auto h-120 text-white ">{result}</div>
          </div>
          <div className="bg-zinc-800 w-1/2 p-1  pr-5 text-white m-auto , rounded-4xl border border-zinc-400 flex h-16 mt-10">
            <input
              type="text"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              className="w-full h-full p-3 outline-none"
              placeholder="Ask me anything"
            />
            <button onClick={askQuestion} className="cursor-pointer">
              Ask
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
