export default function FeatureCard({ title, description, icon: Icon, color }) {
    return (
        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900">
            <div className="flex justify-between mb-3">
                <h3 className="font-bold text-slate-100">{title}</h3>
                <Icon className={color} />
            </div>
            <p className="text-slate-400 text-sm">{description}</p>
        </div>
    );
}
