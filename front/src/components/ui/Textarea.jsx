import { cn } from "../../utility/cn";

export function Textarea({ className, ...props }) {
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
