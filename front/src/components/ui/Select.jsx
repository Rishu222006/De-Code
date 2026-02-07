import { createContext, useContext } from "react";
import { cn } from "../../utility/cn";

const SelectContext = createContext();

export function Select({ value, onValueChange, children }) {
    return (
        <SelectContext.Provider value={{ value, onValueChange }}>
            {children}
        </SelectContext.Provider>
    );
}

export function SelectTrigger({ children, className }) {
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

export function SelectValue() {
    const { value } = useContext(SelectContext);
    return <span>{value}</span>;
}
