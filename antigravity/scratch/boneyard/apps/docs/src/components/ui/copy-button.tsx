"use client";

import { useState } from "react";
import { CopyIcon } from "@/components/ui/icons/copy";
import { CheckIcon } from "@/components/ui/icons/check";

export function CopyButton({ text, className = "" }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className={`absolute top-2.5 right-2.5 p-1.5 rounded-md text-stone-500 hover:text-stone-300 hover:bg-white/5 transition-colors ${className}`}
      aria-label="Copy code"
    >
      {copied ? <CheckIcon size={13} /> : <CopyIcon size={13} />}
    </button>
  );
}
