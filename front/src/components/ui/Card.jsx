import { cn } from "../../utility/cn.js";

export function Card({ className, hoverable = false, ...props }) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-zinc-800 bg-zinc-900",
                hoverable &&
                "transition-transform duration-300ms ease-out hover:scale-[1.05]",
                className
            )}
            {...props}
        />
    );
}

export function CardContent({ className, ...props }) {
    return <div className={cn("p-5", className)} {...props} />;
}
