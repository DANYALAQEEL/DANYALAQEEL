"use client";

import { useState } from "react";
import { CopyIcon } from "@/components/ui/icons/copy";
import { CheckIcon } from "@/components/ui/icons/check";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const plain = code.replace(/<[^>]*>/g, "");
    navigator.clipboard.writeText(plain).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="rounded-lg bg-[#1a1a1a] overflow-hidden">
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 text-[12px] text-[#a8a29e]">
          <span>{filename || language}</span>
          <button
            onClick={handleCopy}
            className="text-[11px] text-[#78716c] hover:text-[#d6d3d1] transition-colors flex items-center gap-1"
          >
            {copied ? (
              <>
                <CheckIcon size={12} />
                copied
              </>
            ) : (
              <>
                <CopyIcon size={12} />
                copy
              </>
            )}
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-[13px] leading-relaxed font-[family-name:var(--font-mono)]">
        <code
          className="text-[#d6d3d1]"
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </pre>
    </div>
  );
}
