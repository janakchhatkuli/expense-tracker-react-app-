import { CATEGORIES } from "../constants/categories";

export const AddExpenseForm = ({ form, onUpdate, onSubmit, onCancel }) => (
  <div className="form-panel">
    <div className="form-title">📝 New Expense</div>

    <form onSubmit={onSubmit}>
      <div className="form-grid">

        <div className="form-field full">
          <label htmlFor="desc">Description</label>
          <input
            id="desc"
            className="form-input"
            placeholder="What did you spend on?"
            autoFocus
            value={form.desc}
            onChange={(e) => onUpdate("desc", e.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="amount">Amount (रु)</label>
          <input
            id="amount"
            className="form-input"
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            value={form.amount}
            onChange={(e) => onUpdate("amount", e.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            className="form-input"
            type="date"
            value={form.date}
            onChange={(e) => onUpdate("date", e.target.value)}
            required
          />
        </div>

        <div className="form-field full">
          <label htmlFor="cat">Category</label>
          <select
            id="cat"
            className="form-select"
            value={form.cat}
            onChange={(e) => onUpdate("cat", e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.icon} {c.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-footer">
          <button type="button" className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn-save">
            Save Expense
          </button>
        </div>

      </div>
    </form>
  </div>
);
