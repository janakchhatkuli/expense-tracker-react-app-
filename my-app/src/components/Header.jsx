import { getBSDate } from "../utils/date";

export const Header = () => (
  <div className="hdr">
    <div className="hdr-rule" />
    <div className="hdr-inner">
      <div className="hdr-left">
        <div className="hdr-eyebrow">Personal Finance</div>
        <div className="hdr-title">Expense Tracker</div>
      </div>
      <div className="hdr-right">
        <div className="hdr-date">{getBSDate()}</div>
      </div>
    </div>
  </div>
);
