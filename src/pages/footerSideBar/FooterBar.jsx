import { Link } from "react-router-dom";
import style from "./FooterBar.module.scss";

function FooterBar() {
  return (
    <div className={style.footerBar}>
      <Link to="/overview" className={style.footerBar__box}>
        <img
          className={style.box__img}
          src="../public/images/icon-nav-overview.svg"
          alt="icon of overview"
        />

        <h3 className={style.footerBar__link}>Overview</h3>
      </Link>
      <Link to="/transactions" className={style.footerBar__box}>
        <img
          className={style.box__img}
          src="../public/images/icon-nav-transactions.svg"
          alt="icon of transactions"
        />

        <h3 className={style.footerBar__link}>Transaction</h3>
      </Link>
      <Link to="/budgets" className={style.footerBar__box}>
        <img
          className={style.box__img}
          src="../public/images/icon-nav-budgets.svg"
          alt="icon of budgets"
        />

        <h3 className={style.footerBar__link}>Budgets</h3>
      </Link>
      <Link to="/posts" className={style.footerBar__box}>
        <img
          className={style.box__img}
          src="../public/images/icon-nav-pots.svg"
          alt="icon of posts"
        />

        <h3 className={style.footerBar__link}>Posts</h3>
      </Link>
      <Link to="/recurringBills" className={style.footerBar__box}>
        <img
          className={style.box__img}
          src="../public/images/icon-nav-recurring-bills.svg"
          alt="icon of recurringBils"
        />

        <h3 className={style.footerBar__link}>Recurring Bills</h3>
      </Link>
    </div>
  );
}

export default FooterBar;
