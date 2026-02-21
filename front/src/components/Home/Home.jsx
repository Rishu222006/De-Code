import Hero from "./Hero.jsx";
import Features from "./Features/Features.jsx";
import EditorPreview from "./Editor/EditorPreview.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0b0f14] to-black text-white font-sans selection:bg-cyan-500/30 relative">
      <Link to={'/about'}>
        <button className="fixed  top-6 right-6 z-50 rounded-md border-zinc-700
                        bg-zinc-800/70 backdrop-blur px-4 py-2 text-sm text-white 
                        transition-transform hover:scale-105 hover:bg-zinc-700/70">
          About us
        </button>
      </Link>
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
