import { formatNPR } from "../utils/currency";

export const SummaryCard = ({ total, itemCount, avgPerTransaction, topCategory }) => (
  <div className="summary-card">
    <div className="sc-eyebrow">Total Spent</div>
    <div className="sc-amount">
      <span>रु</span>
      {total.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
    </div>
    <div className="sc-meta">
      <div>
        <div className="sc-meta-label">Transactions</div>
        <div className="sc-meta-val">{itemCount}</div>
      </div>
      <div>
        <div className="sc-meta-label">Average</div>
        <div className="sc-meta-val">{itemCount ? formatNPR(avgPerTransaction) : "—"}</div>
      </div>
      {topCategory && (
        <div>
          <div className="sc-meta-label">Top Category</div>
          <div className="sc-meta-val">{topCategory.icon} {topCategory.label}</div>
        </div>
      )}
    </div>
  </div>
);
