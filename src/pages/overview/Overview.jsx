import { Link } from "react-router-dom";
import Chart from "../../components/Chart";
import { useCollectionsData } from "../../hooks/useCollectionsData";
import style from "./Overview.module.scss";

function Overview({ showSidebar }) {
  const { data, isPending } = useCollectionsData();

  return (
    <div className={style.overview}>
      <h1 className={style.overview__title}>Overview</h1>
      {/* balance  */}
      <div className={style.overview__balanceBox}>
        <div className={`${style.overview__balanceCard} ${style.firstCard}`}>
          <span className={style.card__subtitle}>Current Balance</span>
          <h2 className={style.card__title}>
            ${data && data.balance.current}.00
          </h2>
        </div>
        {/*  */}
        <div className={style.overview__balanceCard}>
          <span className={style.card__subtitle}>Current Balance</span>
          <h2 className={style.card__title}>${data && data.balance.income}</h2>
        </div>
        {/*  */}
        <div className={style.overview__balanceCard}>
          <span className={style.card__subtitle}>Current Balance</span>
          <h2 className={style.card__title}>
            ${data && data.balance.expenses}0
          </h2>
        </div>
      </div>
      {/*  */}
      <div className={style.budgetsFlex}>
        {/* Pots */}
        <div className={style.overview__statics}>
          <div className={style.overview__pots}>
            <div className={style.pots__head}>
              <h3 className={style.pots__title}>Pots</h3>
              <p className={style.pots__details}>See Details </p>
            </div>
            <div className={style.pots__savingWrapper}>
              <div className={style.pots__totalSaving}>
                <img src="../images/icon-pot.svg" alt="image of pots" />
                <div className={style.pots__totalCard}>
                  <p className={style.pots__totalCard__text}>Total Saved</p>
                  <h3 className={style.pots__totalCard__title}> $850</h3>
                </div>
              </div>
              <div className={style.pots__cardWrapper}>
                {data &&
                  data.pots.map((p) => {
                    return (
                      <div key={p.id} className={style.pots__card}>
                        <div className={style.pots__color}></div>
                        <div className={style.pots__content}>
                          <p>{p.name}</p>
                          <h4>{p.total}</h4>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* transactions */}
          <div className={style.transactions__wrapper}>
            <div className={style.transactions}>
              <div className={style.transactions__content}>
                <h3 className={style.transactions__title}>Transactions</h3>
                <Link to="/transactions" className="content__link">
                  <span>See Details</span>
                  <img src="../images/icon-caret-right.svg" alt="right icon" />
                </Link>
              </div>
              <div>
                {data &&
                  data.transactions.slice(0, 5).map((d) => {
                    return (
                      <div key={d.id} className={style.transactions__box}>
                        <div className={style.imgBox}>
                          <img
                            className={style.box__img}
                            src={d.avatar}
                            alt={d.name}
                          />
                          <h3 className={style.box__title}>{d.name}</h3>
                        </div>
                        <span
                          className={`${style.box__price} ${
                            d.amount > 0 ? "green" : "black"
                          }`}
                        >
                          {d.amount}$
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        {/* Chart */}
        <div className={style.budgets__statics}>
          <Chart />
          {/* recurring bills */}
          <div className={style.recurringBills}>
            <span className={style.recurringBills__content}>
              <h2>Recurring Bills</h2>
              <Link to="/recuringBills" className="content__link">
                <span>See Details</span>
                <img src="../images/icon-caret-right.svg" alt="right icon" />
              </Link>
            </span>
            <div className={style.recurringBills__box}>
              <span className={style.recurringBills__boxTitle}>Paid Bills</span>
              <h3 className={style.box__price}>$190.00</h3>
            </div>
            {/*  */}
            <div className={`${style.recurringBills__box} ${style.second}`}>
              <span className={style.recurringBills__title}>
                Total Upcoming
              </span>
              <h3 className={style.box__price}>$194.98</h3>
            </div>
            {/*  */}
            <div className={`${style.recurringBills__box} ${style.third}`}>
              <span className={style.recurringBills__title}>Due Soon</span>
              <h3 className={style.box__price}>$59.98</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
