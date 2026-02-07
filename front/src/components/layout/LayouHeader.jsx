import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button.jsx";

export default function Header() {
    return (
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
    );
}
