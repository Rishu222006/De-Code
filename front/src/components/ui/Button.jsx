import { cn } from "../../utility/cn";

export function Button({ className, variant = "default", ...props }) {
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
