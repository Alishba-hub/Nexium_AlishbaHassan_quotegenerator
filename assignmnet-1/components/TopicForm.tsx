'use client';

import { Button } from "@/components/ui/button";

const topics = ["life", "success", "motivation", "love", "friendship"];

export default function TopicForm({ onSelect }: { onSelect: (topic: string) => void }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-6">
      {topics.map((topic) => (
        <Button
          key={topic}
          variant="secondary"
          className="capitalize px-6 py-2 rounded-xl bg-blue-100 text-blue-900 font-medium shadow-md hover:shadow-xl hover:bg-blue-200 transition-all"
          onClick={() => onSelect(topic)}
        >
          {topic}
        </Button>
      ))}
    </div>
  );
}
