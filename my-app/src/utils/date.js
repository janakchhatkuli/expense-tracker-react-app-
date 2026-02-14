const BS_MONTHS = [
  "Baishakh", "Jestha", "Ashadh",  "Shrawan",
  "Bhadra",   "Ashwin", "Kartik",  "Mangsir",
  "Poush",    "Magh",   "Falgun",  "Chaitra",
];

/** Returns today's date as an ISO date string (YYYY-MM-DD) */
export const todayStr = () => new Date().toISOString().split("T")[0];

/**
 * Returns an approximate Bikram Sambat date string for display.
 * (Exact BS conversion requires a full lookup table; this is a close approximation.)
 */
export const getBSDate = () => {
  const now = new Date();
  const bsYear = now.getFullYear() + 56 + (now.getMonth() >= 3 ? 1 : 0) - 1;
  const month  = BS_MONTHS[now.getMonth()];
  return `${month} ${now.getDate()}, ${bsYear} B.S.`;
};

/** Short display date, e.g. "Jan 5" */
export const shortDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric" });
