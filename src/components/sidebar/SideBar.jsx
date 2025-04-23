import style from "./SideBar.module.scss";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className={style.header}>
      <div className={style.header__imgBox}>
        <img src="../images/logo-large.svg" alt="image of logo" />
      </div>
      <nav className={style.header__nav}>
        <ul className={style.header__list}>
          <button className={style.header__btn}>
            <img
              className={style.button__img}
              src="../images/icon-nav-overview.svg"
              alt="icon of overview"
            />
            <Link className={style.header__link} to="/overview">
              Overview
            </Link>
          </button>
          <button className={style.header__btn}>
            <img
              className={style.button__img}
              src="../images/icon-nav-transactions.svg"
              alt="icon of transactions"
            />
            <Link className={style.header__link} to="/transactions">
              Transaction
            </Link>
          </button>
          <button className={style.header__btn}>
            <img
              className={style.button__img}
              src="../images/icon-nav-budgets.svg"
              alt="icon of budgets"
            />
            <Link className={style.header__link} to="/budgets">
              Budgets
            </Link>
          </button>
          <button className={style.header__btn}>
            <img
              className={style.button__img}
              src="../images/icon-nav-pots.svg"
              alt="icon of posts"
            />
            <Link className={style.header__link} to="/posts">
              Posts
            </Link>
          </button>
          <button className={style.header__btn}>
            <img
              className={style.button__img}
              src="../images/icon-nav-recurring-bills.svg"
              alt="icon of recurringBils"
            />
            <Link className={style.header__link} to="/recurringBills">
              Recurring Bills
            </Link>
          </button>
        </ul>
      </nav>
      <div className={style.headerMenu__box}>
        <img
          className={style.header__menuImg}
          src="../images/icon-minimize-menu.svg"
          alt="img of minimaze menu"
        />
        <Link className={style.headerMenu__link}>Minimize Menu</Link>
      </div>
    </div>
  );
}

export default SideBar;
