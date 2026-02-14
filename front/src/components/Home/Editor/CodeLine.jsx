export default function CodeLine({ text, color, indent = 0 }) {
    return (
        <div className={color} style={{ paddingLeft: `${indent}rem` }}>
            {text}
        </div>
    );
}
