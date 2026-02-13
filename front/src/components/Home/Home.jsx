import Hero from "./Hero.jsx";
import Features from "./Features/Features.jsx";
import EditorPreview from "./Editor/EditorPreview.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white font-sans selection:bg-cyan-500/30 overflow-hidden relative">
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 flex flex-col items-center">
        <Hero />
        <Features />
        <EditorPreview />

        <p className="text-slate-500 text-sm tracking-widest uppercase">
          Make your code smarter
        </p>
      </div>
    </div>
  );
}
