'use client';

import { useState } from "react";
import TopicForm from "@/components/TopicForm";
import { quotes } from "@/data/quotes";

const backgroundImages: { [key: string]: string } = {
  motivation: "/images/motivational.avif",
  life: "/images/life.avif",
  love: "/images/love.avif",
  friendship: "/images/friendship.avif",
  success: "/images/success.avif",
};

const topics = ["motivation", "life", "success", "love", "friendship"];

export default function Home() {
  const [results, setResults] = useState<string[]>([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleSelect = (topic: string) => {
    setSelectedTopic(topic);
    const filtered = quotes
      .filter((q) => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 5);
    setResults(filtered.map((q) => q.quote));
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center p-4 text-white">
      {/* Very light overlay - increased transparency */}
      <div className="absolute inset-0 bg-white/20 z-0"></div>
      
      {/* Background image - more visible now */}
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center opacity-80 transition-all duration-700"
        style={{
          backgroundImage: `url('${backgroundImages[selectedTopic] || "/images/motivational.avif"}')`,
        }}
      />

      {/* Glass container - medium size */}
      <div className="relative z-10 w-full max-w-2xl mt-12 backdrop-blur-md bg-zinc-800/70 p-8 rounded-2xl shadow-xl border border-white/10">
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-200">✨ Quote Generator</h1>
        <p className="text-center text-zinc-300 mb-5 text-sm">Choose a topic to see inspiring quotes</p>
  
        {/* Topic buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => handleSelect(topic)}
              className="capitalize px-5 py-1.5 rounded-lg bg-blue-100 text-blue-900 font-medium shadow hover:bg-blue-200 transition-all text-sm"
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Quote cards */}
        <div className="space-y-4">
          {results.map((quote, index) => (
            <div
              key={index}
              className="bg-white/10 text-white p-4 rounded-xl border border-white/20 shadow-sm backdrop-blur-sm text-sm"
            >
              “{quote}”
            </div>
          ))}
        </div>

        {selectedTopic && results.length === 0 && (
          <p className="text-center text-red-300 mt-4 text-sm">No quotes found for "{selectedTopic}"</p>
        )}
      </div>
    </main>
  );
}