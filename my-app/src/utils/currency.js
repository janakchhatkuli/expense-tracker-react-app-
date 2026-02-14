/**
 * Formats a number as Nepali Rupees.
 * Uses the South Asian lakh/crore grouping system:
 *   1,000 → रु 1,000.00
 *  12,345 → रु 12,345.00
 * 100,000 → रु 1,00,000.00  (one lakh)
 */
export const formatNPR = (n) => {
  const [intRaw, dec] = Math.abs(n).toFixed(2).split(".");
  let int = intRaw;
  let result = "";

  if (int.length > 3) {
    result = "," + int.slice(-3);
    int = int.slice(0, -3);
    while (int.length > 2) {
      result = "," + int.slice(-2) + result;
      int = int.slice(0, -2);
    }
    result = int + result;
  } else {
    result = int;
  }

  return `रु ${result}.${dec}`;
};
