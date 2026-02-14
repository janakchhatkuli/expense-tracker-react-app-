import { formatNPR } from "../utils/currency";

const BreakdownBar = ({ categoryTotals }) => (
  <>
    <div className="breakdown-label">Spending Breakdown</div>
    <div className="breakdown-track">
      {categoryTotals.map((c) => (
        <div
          key={c.id}
          className="breakdown-seg"
          style={{ width: `${c.barWidth}%`, background: c.color }}
          title={`${c.label}: ${formatNPR(c.total)}`}
        />
      ))}
    </div>
  </>
);

const CategoryCard = ({ cat, isActive, onClick }) => (
  <div
    className={`cat-card${isActive ? " active" : ""}`}
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onClick()}
    aria-pressed={isActive}
  >
    <div className="cat-stripe" style={{ background: cat.color }} />
    <div className="cat-icon">{cat.icon}</div>
    <div className="cat-name">{cat.label}</div>
    <div className="cat-amt" style={{ color: cat.color }}>{formatNPR(cat.total)}</div>
    <div className="cat-pct">{cat.pct}%</div>
  </div>
);

export const CategoryBreakdown = ({ categoryTotals, activeFilter, onToggleFilter }) => {
  if (categoryTotals.length === 0) return null;

  return (
    <>
      <BreakdownBar categoryTotals={categoryTotals} />
      <div className="cat-grid">
        {categoryTotals.map((cat) => (
          <CategoryCard
            key={cat.id}
            cat={cat}
            isActive={activeFilter === cat.id}
            onClick={() => onToggleFilter(cat.id)}
          />
        ))}
      </div>
    </>
  );
};
