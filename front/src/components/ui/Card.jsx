import { cn } from "../../utility/cn.js";

export function Card({ className, ...props }) {
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

export function CardContent({ className, ...props }) {
    return <div className={cn("p-5", className)} {...props} />;
}
