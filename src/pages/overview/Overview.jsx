import Chart from "../../components/Chart";
import { useCollectionsData } from "../../hooks/useCollectionsData";
import style from "./Overview.module.scss";

function Overview() {
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
      {/* Pots */}
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
      {/* Pie chart */}
      <div>
        <Chart />
      </div>
    </div>
  );
}

export default Overview;
