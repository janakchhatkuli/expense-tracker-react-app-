import { useState, useMemo } from "react";
import { SEED_EXPENSES } from "../constants/seedData";
import { DEFAULT_CATEGORY } from "../constants/categories";
import { todayStr } from "../utils/date";
import { buildCategoryTotals } from "../utils/categories";

const BLANK_FORM = { desc: "", amount: "", cat: DEFAULT_CATEGORY, date: todayStr() };
const REMOVE_DELAY_MS = 300;

/**
 * Central state and logic for the expense tracker.
 * Returns everything the UI needs — no business logic leaks into components.
 */
export const useExpenses = () => {
  const [items,     setItems]     = useState(SEED_EXPENSES);
  const [form,      setForm]      = useState(BLANK_FORM);
  const [filter,    setFilter]    = useState("all");
  const [showForm,  setShowForm]  = useState(false);
  const [removingId, setRemovingId] = useState(null);

  // ── derived values ─────────────────────────────────────────────────────────

  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.amount, 0),
    [items]
  );

  const avgPerTransaction = items.length ? total / items.length : 0;

  const categoryTotals = useMemo(
    () => buildCategoryTotals(items, total),
    [items, total]
  );

  const visibleItems = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.cat === filter)),
    [items, filter]
  );

  const activeCategoryIds = useMemo(
    () => new Set(items.map((i) => i.cat)),
    [items]
  );

  // ── actions ────────────────────────────────────────────────────────────────

  const addExpense = (e) => {
    e.preventDefault();
    if (!form.desc.trim() || !form.amount) return;

    const newItem = {
      id:     Date.now(),
      desc:   form.desc.trim(),
      amount: parseFloat(form.amount),
      cat:    form.cat,
      date:   form.date,
    };

    setItems((prev) => [newItem, ...prev]);
    setForm(BLANK_FORM);
    setShowForm(false);
  };

  const removeExpense = (id) => {
    setRemovingId(id);
    setTimeout(() => {
      setItems((prev) => prev.filter((i) => i.id !== id));
      setRemovingId(null);
    }, REMOVE_DELAY_MS);
  };

  const updateForm = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const toggleForm = () => setShowForm((v) => !v);
  const closeForm  = () => setShowForm(false);

  const toggleFilter = (catId) =>
    setFilter((prev) => (prev === catId ? "all" : catId));

  return {
    // state
    items,
    form,
    filter,
    showForm,
    removingId,
    // derived
    total,
    avgPerTransaction,
    categoryTotals,
    visibleItems,
    activeCategoryIds,
    // actions
    addExpense,
    removeExpense,
    updateForm,
    toggleForm,
    closeForm,
    setFilter,
    toggleFilter,
  };
};
