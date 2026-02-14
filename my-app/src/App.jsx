import { useEffect, useState } from "react";
import { GLOBAL_STYLES }       from "./styles/theme";
import { useExpenses }          from "./hooks/useExpenses";
import { Header }               from "./components/Header";
import { SummaryCard }          from "./components/SummaryCard";
import { CategoryBreakdown }    from "./components/CategoryBreakdown";
import { Controls }             from "./components/Controls";
import { AddExpenseForm }       from "./components/AddExpenseForm";
import { ExpenseList }          from "./components/ExpenseList";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { requestAnimationFrame(() => setLoaded(true)); }, []);

  const {
    form, filter, showForm, removingId,
    total, avgPerTransaction, categoryTotals, visibleItems, activeCategoryIds,
    addExpense, removeExpense, updateForm,
    toggleForm, closeForm, toggleFilter,
  } = useExpenses();

  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      <div className="app-wrap">
        <div className={`app-inner${loaded ? " loaded" : ""}`}>

          <Header />

          <SummaryCard
            total={total}
            itemCount={visibleItems.length}
            avgPerTransaction={avgPerTransaction}
            topCategory={categoryTotals[0]}
          />

          <CategoryBreakdown
            categoryTotals={categoryTotals}
            activeFilter={filter}
            onToggleFilter={toggleFilter}
          />

          <Controls
            filter={filter}
            activeCategoryIds={activeCategoryIds}
            showForm={showForm}
            onToggleFilter={toggleFilter}
            onToggleForm={toggleForm}
          />

          {showForm && (
            <AddExpenseForm
              form={form}
              onUpdate={updateForm}
              onSubmit={addExpense}
              onCancel={closeForm}
            />
          )}

          <ExpenseList
            items={visibleItems}
            removingId={removingId}
            onRemove={removeExpense}
          />

        </div>
      </div>
    </>
  );
}

