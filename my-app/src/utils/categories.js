import { CATEGORIES } from "../constants/categories";

/** Returns the category object for the given id, falling back to "Other". */
export const getCategoryById = (id) =>
  CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[CATEGORIES.length - 1];

/**
 * Given a list of expense items and the grand total,
 * returns each category enriched with its subtotal and percentage,
 * sorted descending by total, with zero-spend categories removed.
 */
export const buildCategoryTotals = (items, grandTotal) =>
  CATEGORIES.map((cat) => ({
    ...cat,
    total: items
      .filter((i) => i.cat === cat.id)
      .reduce((sum, i) => sum + i.amount, 0),
  }))
    .filter((c) => c.total > 0)
    .sort((a, b) => b.total - a.total)
    .map((c) => ({
      ...c,
      pct: grandTotal > 0 ? Math.round((c.total / grandTotal) * 100) : 0,
      barWidth: grandTotal > 0 ? (c.total / grandTotal) * 100 : 0,
    }));
