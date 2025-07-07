'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SelfiePage() {
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const handleNext = () => {
    if (file) {
      sessionStorage.setItem("selfie", file.name); // just placeholder
      router.push("/result");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-xl font-bold mb-4">Upload Your Selfie</h1>
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button
        className="mt-4 px-6 py-2 bg-black text-white rounded"
        disabled={!file}
        onClick={handleNext}
      >
        Continue
      </button>
    </div>
  );
}