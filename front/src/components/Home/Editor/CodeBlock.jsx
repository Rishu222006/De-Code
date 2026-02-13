import CodeLine from "./CodeLine.jsx";

export default function CodeBlock({ lines }) {
    return (
        <div className="p-4 font-mono text-sm space-y-1">
            {lines.map((line, i) => (
                <CodeLine key={i} {...line} />
            ))}
        </div>
    );
}
