import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../../ui/Button.jsx";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between mb-12"
        >
            <h1 className="flex items-center gap-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 via-slate-500 to-slate-200">
                <Sparkles className="text-indigo-400" /> De-CODE
            </h1>
            <Button variant="secondary">
                <Link to={'/about'}>
                    About Us
                </Link>
            </Button>
        </motion.header>
    );
}
