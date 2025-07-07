'use client'
import { useEffect, useState } from "react";

export default function ResultPage() {
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    const stored = sessionStorage.getItem("quizAnswers");
    if (stored) setAnswers(JSON.parse(stored));
  }, []);

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Your Fantasy Blueprint</h1>
      <ul className="list-disc pl-6">
        {answers.map((a, i) => (
          <li key={i}><strong>Q{i + 1}:</strong> {a}</li>
        ))}
      </ul>
    </div>
  );
}