{/*added by prnv*/ }
import { useState, createContext, useContext } from "react";
import { Sparkles, Code2, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

/* -------------------- UTILS -------------------- */
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

/* -------------------- UI COMPONENTS -------------------- */

function Button({ className, variant = "default", ...props }) {
    const variants = {
        default: "bg-indigo-600 hover:bg-indigo-700 text-white",
        secondary: "bg-zinc-800 hover:bg-zinc-700 text-white",
    };

    return (
        <button
            className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition disabled:opacity-50",
                variants[variant],
                className
            )}
            {...props}
        />
    );
}

function Card({ className, ...props }) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-zinc-800 bg-zinc-900",
                className
            )}
            {...props}
        />
    );
}

function CardContent({ className, ...props }) {
    return <div className={cn("p-5", className)} {...props} />;
}

function Textarea({ className, ...props }) {
    return (
        <textarea
            className={cn(
                "w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500",
                className
            )}
            {...props}
        />
    );
}

/* -------------------- SELECT -------------------- */

const SelectContext = createContext();

function Select({ value, onValueChange, children }) {
    return (
        <SelectContext.Provider value={{ value, onValueChange }}>
            {children}
        </SelectContext.Provider>
    );
}

function SelectTrigger({ className, children }) {
    return (
        <button
            className={cn(
                "flex w-32 justify-between rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm",
                className
            )}
        >
            {children}
        </button>
    );
}

function SelectValue() {
    const { value } = useContext(SelectContext);
    return <span>{value}</span>;
}

function SelectContent({ children }) {
    const { onValueChange } = useContext(SelectContext);

    return (
        <div className="absolute z-50 mt-1 w-32 rounded-md border border-zinc-800 bg-zinc-900">
            {children.map((child) =>
                clone(child, { onValueChange })
            )}
        </div>
    );
}

function SelectItem({ value, children, onValueChange }) {
    return (
        <div
            onClick={() => onValueChange(value)}
            className="cursor-pointer px-3 py-2 text-sm hover:bg-zinc-800"
        >
            {children}
        </div>
    );
}

function clone(element, props) {
    return { ...element, props: { ...element.props, ...props } };
}

/* -------------------- MAIN APP -------------------- */

export default function Analysis() {
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("JavaScript");
    const [loading, setLoading] = useState(false);
    const [score, setScore] = useState(null);

    function handleReview() {
        if (!code) return;
        setLoading(true);
        setScore(null);

        setTimeout(() => {
            setScore(Math.floor(Math.random() * 40) + 60);
            setLoading(false);
        }, 2000);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white p-6">
            {/* Header */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-between mb-12"
            >
                <h1 className="flex items-center gap-2 text-2xl font-bold">
                    <Sparkles className="text-indigo-400" /> de-code
                </h1>
                <Button variant="secondary">Try Demo</Button>
            </motion.header>

            {/* Hero */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mx-auto mb-16 max-w-4xl text-center"
            >
                <h2 className="mb-4 text-4xl font-bold">
                    Write Better Code. Faster. Smarter.
                </h2>
                <p className="text-lg text-zinc-400">
                    A Gen-AI powered code reviewer with quality & complexity analysis.
                </p>
            </motion.section>

            {/* Main */}
            <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
                {/* Input */}
                <Card>
                    <CardContent>
                        <div className="mb-3 flex justify-between">
                            <h3 className="flex items-center gap-2 font-semibold">
                                <Code2 className="text-indigo-400" /> Paste your code
                            </h3>
                            <Select value={language} onValueChange={setLanguage}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                            </Select>
                        </div>

                        <Textarea
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="// Paste your code here"
                            className="h-64"
                        />

                        <Button
                            className="mt-4 w-full"
                            onClick={handleReview}
                            disabled={!code || loading}
                        >
                            {loading ? "Analyzing…" : "Review Code"}
                        </Button>
                    </CardContent>
                </Card>

                {/* Output */}
                <Card>
                    <CardContent>
                        <h3 className="mb-3 flex items-center gap-2 font-semibold">
                            <Zap className="text-green-400" /> AI Suggestions
                        </h3>

                        {loading ? (
                            <motion.p
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{ repeat: Infinity, duration: 1.2 }}
                                className="text-sm text-zinc-400"
                            >
                                🧪 Analyzing code…
                            </motion.p>
                        ) : score ? (
                            <>
                                <QualityMeter score={score} />
                                <Suggestion type="bug" text="Unused variable detected" />
                                <Suggestion
                                    type="warning"
                                    text="Loop complexity can be optimized"
                                />
                                <Suggestion
                                    type="suggestion"
                                    text="Rename function for clarity"
                                />
                            </>
                        ) : (
                            <p className="text-sm text-zinc-500">
                                Paste code and click “Review Code”.
                            </p>
                        )}
                    </CardContent>
                </Card>
            </section>

            {/* Features */}
            <section className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
                <Feature icon={<ShieldCheck className="text-blue-400" />} title="Secure" />
                <Feature icon={<Zap className="text-green-400" />} title="Fast" />
                <Feature icon={<Code2 className="text-indigo-400" />} title="Smart" />
            </section>
        </div>
    );
}

/* -------------------- EXTRA -------------------- */

function QualityMeter({ score }) {
    const color =
        score >= 80 ? "bg-green-500" : score >= 60 ? "bg-yellow-500" : "bg-red-500";

    return (
        <div className="mb-4">
            <div className="mb-1 flex justify-between text-sm">
                <span>Code Quality</span>
                <span>{score}/100</span>
            </div>
            <div className="h-2 rounded-full bg-zinc-800">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${score}%` }}
                    className={`h-full rounded-full ${color}`}
                />
            </div>
        </div>
    );
}

function Suggestion({ type, text }) {
    const colors = {
        bug: "text-red-400",
        warning: "text-yellow-400",
        suggestion: "text-green-400",
    };

    return (
        <p className={`text-sm ${colors[type]}`}>• {text}</p>
    );
}

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


/* import { useState } from "react";

import Header from "../layout/LayouHeader";
import Hero from "../layout/Hero.jsx";
import CodeInputPanel from "../Features/CodeInputPanel.jsx";
import ReviewPanel from "../Features/ReviewPanel.jsx";
import FeaturesSection from "../Features/FeaturesSextion.jsx";

export default function Analysis() {
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("JavaScript");
    const [loading, setLoading] = useState(false);
    const [score, setScore] = useState(null);

    function handleReview() {
        if (!code) return;
        setLoading(true);
        setScore(null);

        setTimeout(() => {
            setScore(Math.floor(Math.random() * 40) + 60);
            setLoading(false);
        }, 2000);
    }

    return (
        <PageWrapper>
            <Header />
            <Hero />

            <main className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
                <CodeInputPanel
                    code={code}
                    onCodeChange={setCode}
                    language={language}
                    onLanguageChange={setLanguage}
                    loading={loading}
                    onReview={handleReview}
                />

                <ReviewPanel loading={loading} score={score} />
            </main>

            <FeaturesSection />
        </PageWrapper>
    );
}
 */