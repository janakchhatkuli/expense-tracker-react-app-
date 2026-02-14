export const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Yatra+One&family=Hind:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:       #FAF6F0;
    --paper:    #FFFDF9;
    --ink:      #1E1810;
    --ink2:     #6B5E4E;
    --ink3:     #B0A090;
    --border:   #E8DDD0;
    --accent:   #C94F1A;
    --accent2:  #E8A844;
    --sh:       0 2px 12px rgba(100,60,20,.10);
    --sh-lg:    0 8px 32px rgba(100,60,20,.14);
    --radius:   10px;
    --font-display: 'Yatra One', cursive;
    --font-body:    'Hind', sans-serif;
  }
  html, body, #root {
  width: 100%;
  min-height: 100vh;
}

  body { background: var(--bg); }

  /* ── Layout ── */
  .app-wrap {
    min-height: 100vh;
    background: var(--bg);
    background-image:
      radial-gradient(ellipse 80% 50% at 50% -5%, rgba(201,79,26,.08) 0%, transparent 65%),
      url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C97A40' fill-opacity='0.03'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
    font-family: var(--font-body);
    color: var(--ink);
  }
  .app-inner {
    width: 100%;
    max-width: 100%;
    padding: 44px 40px 80px;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity .55s ease, transform .55s ease;
  }
  .app-inner.loaded { opacity: 1; transform: none; }

  /* ── Header ── */
  .hdr { position: relative; margin-bottom: 36px; }
  .hdr-rule { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: var(--border); }
  .hdr-inner { position: relative; display: flex; justify-content: space-between; align-items: flex-end; }
  .hdr-left { background: var(--bg); padding-right: 16px; }
  .hdr-eyebrow { font-size: 10px; letter-spacing: .2em; text-transform: uppercase; color: var(--accent); font-weight: 500; margin-bottom: 3px; }
  .hdr-title { font-family: var(--font-display); font-size: clamp(2rem, 6vw, 3.2rem); line-height: 1; color: var(--ink); }
  .hdr-right { background: var(--bg); padding-left: 16px; text-align: right; }
  .hdr-date { font-size: 11px; color: var(--ink3); }

  /* ── Summary Card ── */
  .summary-card {
    background: var(--ink);
    border-radius: 14px;
    padding: 28px 32px;
    margin-bottom: 24px;
    position: relative;
    overflow: hidden;
    box-shadow: var(--sh-lg);
  }
  .summary-card::before {
    content: ''; position: absolute;
    top: -50px; right: -50px;
    width: 200px; height: 200px;
    border-radius: 50%;
    background: rgba(201,79,26,.16);
  }
  .summary-card::after {
    content: ''; position: absolute;
    bottom: -40px; left: 30px;
    width: 140px; height: 140px;
    border-radius: 50%;
    background: rgba(232,168,68,.09);
  }
  .sc-eyebrow { font-size: 10px; letter-spacing: .2em; text-transform: uppercase; color: rgba(255,255,255,.38); margin-bottom: 6px; position: relative; z-index: 1; }
  .sc-amount { font-family: var(--font-display); font-size: clamp(2rem, 7vw, 3.4rem); color: #fff; line-height: 1; margin-bottom: 20px; position: relative; z-index: 1; }
  .sc-amount span { color: var(--accent2); margin-right: 6px; }
  .sc-meta { display: flex; gap: 28px; flex-wrap: wrap; position: relative; z-index: 1; }
  .sc-meta-label { font-size: 10px; color: rgba(255,255,255,.33); letter-spacing: .1em; text-transform: uppercase; }
  .sc-meta-val   { font-size: 14px; color: rgba(255,255,255,.78); font-weight: 500; margin-top: 2px; }

  /* ── Breakdown Bar ── */
  .breakdown-label { font-size: 10px; letter-spacing: .18em; text-transform: uppercase; color: var(--ink3); margin-bottom: 10px; }
  .breakdown-track { height: 8px; background: var(--border); border-radius: 4px; display: flex; overflow: hidden; margin-bottom: 24px; }
  .breakdown-seg   { height: 100%; transition: width .5s cubic-bezier(.4,0,.2,1); }

  /* ── Category Grid ── */
  .cat-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(128px, 1fr)); gap: 10px; margin-bottom: 28px; }
  .cat-card {
    background: var(--paper); border: 1px solid var(--border); border-radius: var(--radius);
    padding: 14px 14px 12px; cursor: pointer; position: relative; overflow: hidden;
    transition: transform .14s, box-shadow .14s, border-color .14s;
  }
  .cat-card:hover { transform: translateY(-2px); box-shadow: var(--sh); }
  .cat-card.active { border-color: var(--accent); box-shadow: 0 0 0 2px rgba(201,79,26,.14); }
  .cat-stripe { position: absolute; left: 0; top: 0; bottom: 0; width: 3px; border-radius: var(--radius) 0 0 var(--radius); }
  .cat-icon  { font-size: 20px; margin-bottom: 7px; }
  .cat-name  { font-size: 12px; color: var(--ink2); margin-bottom: 4px; }
  .cat-amt   { font-size: 13px; font-weight: 600; }
  .cat-pct   { font-size: 10px; color: var(--ink3); }

  /* ── Controls ── */
  .controls { display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-bottom: 14px; flex-wrap: wrap; }
  .filter-tabs { display: flex; gap: 6px; flex-wrap: wrap; }
  .filter-tab {
    font-family: var(--font-body); font-size: 11px; font-weight: 500;
    padding: 5px 12px; border: 1px solid var(--border); background: var(--paper);
    color: var(--ink2); cursor: pointer; border-radius: 20px; transition: all .13s;
  }
  .filter-tab:hover { border-color: var(--accent); color: var(--accent); }
  .filter-tab.active { background: var(--accent); border-color: var(--accent); color: #fff; }
  .add-btn {
    font-family: var(--font-body); font-size: 12px; font-weight: 600;
    padding: 7px 20px; background: var(--accent); color: #fff; border: none;
    border-radius: 20px; cursor: pointer; white-space: nowrap;
    box-shadow: 0 3px 10px rgba(201,79,26,.28);
    transition: background .13s, transform .12s;
  }
  .add-btn:hover { background: #B5441A; transform: translateY(-1px); }

  /* ── Add Expense Form ── */
  .form-panel {
    background: var(--paper); border: 1px solid var(--border); border-radius: 12px;
    padding: 24px; margin-bottom: 18px; box-shadow: var(--sh);
    animation: popIn .22s ease;
  }
  @keyframes popIn {
    from { opacity: 0; transform: translateY(-8px) scale(.98); }
    to   { opacity: 1; transform: none; }
  }
  .form-title { font-family: var(--font-display); font-size: 18px; color: var(--ink); margin-bottom: 18px; }
  .form-grid  { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .form-field { display: flex; flex-direction: column; gap: 5px; }
  .form-field.full { grid-column: 1 / -1; }
  .form-field label { font-size: 10px; letter-spacing: .15em; text-transform: uppercase; color: var(--ink2); font-weight: 500; }
  .form-input, .form-select {
    font-family: var(--font-body); font-size: 14px;
    background: var(--bg); border: 1.5px solid var(--border); color: var(--ink);
    padding: 9px 12px; border-radius: 7px; outline: none;
    transition: border-color .14s, box-shadow .14s; width: 100%;
    -webkit-appearance: none; appearance: none;
  }
  .form-input::placeholder { color: var(--ink3); }
  .form-input:focus, .form-select:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(201,79,26,.11);
  }
  .form-select option { background: #fff; }
  .form-footer { grid-column: 1 / -1; display: flex; gap: 10px; justify-content: flex-end; margin-top: 4px; }
  .btn-cancel {
    font-family: var(--font-body); font-size: 12px; font-weight: 500;
    padding: 7px 18px; border: 1.5px solid var(--border); background: transparent;
    color: var(--ink2); border-radius: 7px; cursor: pointer; transition: all .13s;
  }
  .btn-cancel:hover { border-color: var(--ink2); }
  .btn-save {
    font-family: var(--font-body); font-size: 12px; font-weight: 600;
    padding: 7px 24px; border: none; background: var(--accent); color: #fff;
    border-radius: 7px; cursor: pointer;
    box-shadow: 0 2px 8px rgba(201,79,26,.25); transition: background .13s;
  }
  .btn-save:hover { background: #B5441A; }

  /* ── Expense List ── */
  .list-label { font-size: 10px; letter-spacing: .18em; text-transform: uppercase; color: var(--ink3); margin-bottom: 10px; }
  .expense-list { display: flex; flex-direction: column; gap: 8px; }
  .expense-item {
    display: flex; align-items: center; gap: 14px;
    background: var(--paper); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 14px 16px;
    transition: transform .14s, box-shadow .14s, opacity .3s;
  }
  .expense-item:hover { transform: translateX(3px); box-shadow: var(--sh); }
  .expense-item.removing { opacity: 0; transform: translateX(22px) !important; }
  .expense-icon { width: 38px; height: 38px; border-radius: 9px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
  .expense-body { flex: 1; min-width: 0; }
  .expense-desc { font-size: 14px; font-weight: 500; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .expense-sub  { font-size: 11px; color: var(--ink3); margin-top: 2px; }
  .expense-amt  { font-family: var(--font-display); font-size: 15px; color: var(--ink); flex-shrink: 0; }
  .expense-del  {
    background: none; border: none; color: var(--border);
    font-size: 14px; cursor: pointer; padding: 3px 6px; border-radius: 5px; flex-shrink: 0; line-height: 1;
    transition: color .13s, background .13s;
  }
  .expense-del:hover { color: var(--accent); background: rgba(201,79,26,.08); }

  /* ── Empty State ── */
  .empty-state {
    background: var(--paper); border: 1.5px dashed var(--border);
    border-radius: var(--radius); padding: 44px; text-align: center; color: var(--ink3); font-size: 13px;
  }
  .empty-state-icon { font-size: 30px; margin-bottom: 8px; }

  /* ── Responsive ── */
  @media (max-width: 520px) {
    .form-grid { grid-template-columns: 1fr; }
    .form-field.full, .form-footer { grid-column: unset; }
    .cat-grid { grid-template-columns: repeat(2, 1fr); }
  }
`;
