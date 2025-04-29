import { useCollection } from "../../hooks/useCollection";
import style from "./Transaction.module.scss";

function Transactions() {
  const { data } = useCollection("transactions");
  return (
    <div className={style.transactions}>
      <div className={style.transactions__option}>
        <input type="text" placeholder="Search transaction" />
        <img src="../images/icon-sort-mobile.svg" alt="image of sort mobile" />
        <img
          src="../images/icon-filter-mobile.svg"
          alt="image of filter mobile"
        />
        {/* sort */}
        <div className={style.transactions__sort}>
          <label htmlFor="">Sort by</label>
          <select>
            <option value="">Latest</option>
            <option value="">Oldest</option>
            <option value="">A to Z</option>
            <option value="">Z to A</option>
            <option value="">Highest</option>
            <option value="">Lowest $</option>
          </select>
        </div>
        {/* category */}
        <div className={style.transactions__category}>
          <label htmlFor="">Category</label>
          <select>
            <option value="">All Transactions</option>
            <option value="">Entertainment</option>
            <option value="">Bills</option>
            <option value="">Dining Out</option>
            <option value="">Transportation</option>
            <option value="">Personal Care </option>
          </select>
        </div>
      </div>
      <div className={style.transactions__List}>
        <p className={style.transactions__text}>Recipient / Sender</p>
        <p className={style.transactions__text}>Category</p>
        <p className={style.transactions__text}>Transaction Date</p>
        <p className={style.transactions__text}>Amount</p>
      </div>
      <div className={style.transactionsMapped__Box}>
        {data &&
          data.map((d) => {
            console.log(d);
            return (
              <div key={d.id} className={style.transactions__miniContainer}>
                <div className={style.miniContainer__imgBox}>
                  <img
                    className={style.miniContainer__img}
                    src={d.avatar}
                    alt={d.title}
                  />
                  <div>
                    {" "}
                    <h3 className={style.miniContainer__title}>{d.name}</h3>
                    <p className={style.hidden__category}>{d.category}</p>
                  </div>
                </div>
                <p className={style.miniContainer__category}>{d.category}</p>
                <p className={style.miniContainer__date}>2024.12.14</p>
                <p
                  className={`${style.miniContainer__amount} ${
                    d.amount > 0 ? "green" : "black"
                  }`}
                >
                  {d.amount}$
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Transactions;
