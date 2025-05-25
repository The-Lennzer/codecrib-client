'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

// Dynamically import the editor and preview (if needed)
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });
const MarkdownPreview = dynamic(() => import('@uiw/react-markdown-preview'), { ssr: false });

export default function BlogEditorPage() {
  const [value, setValue] = useState<string | undefined>('**Hello world!**');

  return (
    <div className="container mx-auto p-4">
      <div className="prose prose-sm max-w-none p-4 focus:outline-none">
        <MDEditor
            value={value}
            onChange={setValue}
            hideToolbar
            preview="edit"
            className="border-none shadow-none focus:outline-none text-base bg-transparent"
        />
        </div>
    </div>
  );
}
