import { todayStr } from "../utils/date";

export const SEED_EXPENSES = [
  { id: 1, desc: "Lunch at restaurant",   amount: 180,  cat: "food",      date: todayStr() },
  { id: 2, desc: "Tempo fare",            amount: 25,   cat: "transport", date: todayStr() },
  { id: 3, desc: "Grocery shopping",      amount: 1450, cat: "shopping",  date: todayStr() },
];
