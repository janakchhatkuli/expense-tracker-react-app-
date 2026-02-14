import { CATEGORIES } from "../constants/categories";

export const Controls = ({ filter, activeCategoryIds, showForm, onToggleFilter, onToggleForm }) => (
  <div className="controls">
    <div className="filter-tabs">
      <button
        className={`filter-tab${filter === "all" ? " active" : ""}`}
        onClick={() => onToggleFilter("all")}
      >
        All
      </button>

      {CATEGORIES.filter((c) => activeCategoryIds.has(c.id)).map((c) => (
        <button
          key={c.id}
          className={`filter-tab${filter === c.id ? " active" : ""}`}
          onClick={() => onToggleFilter(c.id)}
        >
          {c.icon} {c.label}
        </button>
      ))}
    </div>

    <button className="add-btn" onClick={onToggleForm}>
      {showForm ? "✕ Close" : "+ Add Expense"}
    </button>
  </div>
);
