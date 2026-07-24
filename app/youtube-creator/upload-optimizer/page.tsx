"use client";

import { useState } from "react";

export default function UploadOptimizerPage() {
  const [topic, setTopic] = useState("");
  const [checklist, setChecklist] = useState("");

  function generateOptimization() {
    if (!topic.trim()) {
      setChecklist("Please enter a video topic first.");
      return;
    }

    setChecklist(
`YouTube Upload Optimizer AI

VIDEO TOPIC:
${topic}

TITLE CHECK:
✅ Clear audience benefit
✅ Contains main keyword
✅ Creates curiosity
✅ High click potential

DESCRIPTION OPTIMIZATION:

First 2 lines:
Explain the value of the video immediately.

Include:
- Main keywords
- Related topics
- Links
- Call to action

SEO CHECKLIST:

✅ Primary keyword included
✅ Secondary keywords added
✅ Tags prepared
✅ Hashtags added
✅ Thumbnail matches title

CATEGORY SUGGESTION:
Technology / Education / How To

PINNED COMMENT:

"What's your opinion about ${topic}?
Comment below and subscribe for more."

UPLOAD CHECKLIST:

Before publishing:
☐ Thumbnail uploaded
☐ Description completed
☐ Tags added
☐ Captions enabled
☐ End screen added
☐ Cards added
☐ Community post prepared

GROWTH STRATEGY:

After publishing:
- Share on Shorts
- Create TikTok version
- Reply to comments
- Analyze retention`
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-4">
        YouTube Upload Optimizer AI
      </h1>

      <p className="text-zinc-400 mb-8">
        Optimize videos before publishing.
      </p>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter video topic..."
        className="w-full bg-zinc-900 rounded-xl p-4 mb-5"
      />

      <button
        onClick={generateOptimization}
        className="bg-white text-black px-6 py-3 rounded-xl"
      >
        Optimize Upload
      </button>

      {checklist && (
        <div className="mt-8 bg-zinc-900 rounded-2xl p-6">
          <pre className="whitespace-pre-wrap">
            {checklist}
          </pre>
        </div>
      )}

    </main>
  );
}