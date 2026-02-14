import AboutHero from "./AboutHero.jsx";
import MissionVision from "./MissionVision.jsx";
import WhyDecode from "./WhyDecode.jsx";
import TechStack from "./TechStack.jsx";
import AboutCTA from "./AboutCTA.jsx";

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-[#0b0f14] to-black text-white px-6 py-20">
            <AboutHero />
            <MissionVision />
            <WhyDecode />
            <TechStack />
            <AboutCTA />
        </div>
    );
}
