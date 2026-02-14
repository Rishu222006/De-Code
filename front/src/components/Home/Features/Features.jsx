import { FEATURES } from "../../../utility/HomeData.js";
import FeatureCard from "./FeatureCard.jsx";

export default function Features() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-24">
            {FEATURES.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
            ))}
        </section>
    );
}
