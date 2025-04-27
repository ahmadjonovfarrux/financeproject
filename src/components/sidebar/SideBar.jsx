import style from "./SideBar.module.scss";
import { Link } from "react-router-dom";
function SideBar({ showSidebar, setShowSidebar }) {
  return (
    <div className="header__media">
      
      <div className={`header ${showSidebar ? "sidebar" : ""}`}>
        <div className={style.header__imgBox}>
          <Link to="/">
            {!showSidebar ? (
              <img src="../images/logo-large.svg" alt="image of logo" />
            ) : (
              <img src="../images/logo-small.svg" alt="image of logo" />
            )}
          </Link>
        </div>
        <nav className={style.header__nav}>
          <ul className={style.header__list}>
            {!showSidebar ? (
              <div className={style.header__logoList}>
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
              </div>
            ) : (
              <div className={style.header__logoWrapper}>
                <Link to="/overview">
                  <img
                    className={style.button__img}
                    src="../images/icon-nav-overview.svg"
                    alt="logo of overview"
                  />
                </Link>
                <Link to="/transactions">
                  <img
                    className={style.button__img}
                    src="../images/icon-nav-transactions.svg"
                    alt="logo of overview"
                  />
                </Link>
                <Link to="/budgets">
                  <img
                    className={style.button__img}
                    src="../images/icon-nav-budgets.svg"
                    alt="logo of overview"
                  />
                </Link>
                <Link to="/posts">
                  <img
                    className={style.button__img}
                    src="../images/icon-nav-pots.svg"
                    alt="logo of overview"
                  />
                </Link>
                <Link to="/recurringBills">
                  <img
                    className={style.button__img}
                    src="../images/icon-nav-recurring-bills.svg"
                    alt="logo of overview"
                  />
                </Link>
              </div>
            )}
          </ul>
          {/*  */}
          {showSidebar ? (
            <div
              className={style.rightIconBox}
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <img
                className={style.header__rightIcon}
                src="../images/rightIcon.svg"
                alt="image of right icon"
              />
            </div>
          ) : (
            <div
              className={style.headerMenu__box}
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <img
                className={style.header__menuImg}
                src="../images/icon-minimize-menu.svg"
                alt="img of minimaze menu"
              />
              <button className={style.headerMenu__link}>Minimize Menu</button>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
