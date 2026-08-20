type StatAccent = "primary" | "progress" | "done";

type StatsCardProps = {
  label: string;
  value: number;
  accent: StatAccent;
  className?: string;
};

const chipStyles: Record<StatAccent, string> = {
  primary: "bg-primary-soft",
  progress: "bg-status-progress-bg",
  done: "bg-status-done-bg",
};

const valueStyles: Record<StatAccent, string> = {
  primary: "text-primary",
  progress: "text-status-progress-text",
  done: "text-status-done-text",
};

function StatsCard({ label, value, accent, className = "" }: StatsCardProps) {
  return (
    <div
      className={`rounded-[14px] border border-border bg-surface p-[18px] lg:grid lg:grid-cols-[2.5rem_1fr] lg:items-center lg:gap-x-[18px] lg:rounded-lg ${className}`}
    >
      <div
        className={`col-start-1 row-span-2 hidden size-10 rounded-md lg:block ${chipStyles[accent]}`}
      />
      <dt className="text-xs font-medium text-text-muted lg:col-start-2">{label}</dt>
      <dd className={`text-xl font-bold lg:col-start-2 ${valueStyles[accent]}`}>{value}</dd>
    </div>
  );
}

export default StatsCard;
