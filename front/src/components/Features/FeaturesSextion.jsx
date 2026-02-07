import { ShieldCheck, Zap, Code2 } from "lucide-react";
import { Card, CardContent } from "../ui/Card";

function Feature({ icon, title }) {
    return (
        <Card>
            <CardContent>
                {icon}
                <h4 className="mt-2 font-semibold">{title}</h4>
                <p className="text-sm text-zinc-400">
                    Built for modern developers.
                </p>
            </CardContent>
        </Card>
    );
}

export default function FeaturesSection() {
    return (
        <section className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            <Feature
                icon={<ShieldCheck className="text-blue-400" />}
                title="Secure"
            />
            <Feature
                icon={<Zap className="text-green-400" />}
                title="Fast"
            />
            <Feature
                icon={<Code2 className="text-indigo-400" />}
                title="Smart"
            />
        </section>
    );
};