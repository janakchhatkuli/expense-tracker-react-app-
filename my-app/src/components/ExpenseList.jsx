import { formatNPR } from "../utils/currency";
import { shortDate } from "../utils/date";
import { getCategoryById } from "../utils/categories";

const EmptyState = () => (
  <div className="empty-state">
    <div className="empty-state-icon">🪔</div>
    No expenses recorded
  </div>
);

const ExpenseItem = ({ item, isRemoving, onRemove }) => {
  const cat = getCategoryById(item.cat);

  return (
    <div className={`expense-item${isRemoving ? " removing" : ""}`}>
      <div className="expense-icon" style={{ background: cat.light }}>
        {cat.icon}
      </div>
      <div className="expense-body">
        <div className="expense-desc">{item.desc}</div>
        <div className="expense-sub">{cat.label} · {shortDate(item.date)}</div>
      </div>
      <div className="expense-amt">{formatNPR(item.amount)}</div>
      <button
        className="expense-del"
        onClick={() => onRemove(item.id)}
        title="Remove expense"
        aria-label={`Remove ${item.desc}`}
      >
        ✕
      </button>
    </div>
  );
};

export const ExpenseList = ({ items, removingId, onRemove }) => (
  <>
    <div className="list-label">Expense List</div>
    <div className="expense-list">
      {items.length === 0 ? (
        <EmptyState />
      ) : (
        items.map((item) => (
          <ExpenseItem
            key={item.id}
            item={item}
            isRemoving={removingId === item.id}
            onRemove={onRemove}
          />
        ))
      )}
    </div>
  </>
);
