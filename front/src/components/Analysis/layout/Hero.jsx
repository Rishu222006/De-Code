import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mb-16 max-w-4xl text-center"
        >
            <h2 className="mb-4 text-3xl font-bold">
                Write Better Code. Faster. Smarter.
            </h2>
            <p className="text-lg text-zinc-400">
                A Gen-AI powered code reviewer with quality & complexity analysis.
            </p>
        </motion.section>
    );
}
