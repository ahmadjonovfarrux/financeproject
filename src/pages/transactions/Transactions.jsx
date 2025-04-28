import { useCollection } from "../../hooks/useCollection";
import style from "./Transaction.module.scss";

function Transactions() {
  const { data } = useCollection("transactions");
  return (
    <div className="transactions">
      <div className="transactions__option">
        <input type="text" placeholder="Search transaction" />
      </div>
      <div className="transactions__List">
        <p className="transactionsList__text">Recipient / Sender</p>
        <p className="transactionsList__text">Category</p>
        <p className="transactionsList__text">Transaction Date</p>
        <p className="transactionsList__text">Amount</p>
      </div>
      <div>
        {data &&
          data.map((d) => {
            console.log(d);
            return (
              <div key={d.id} className={style.transactions__miniContainer}>
                <div>
                  <img
                    className={style.miniContainer__img}
                    src={d.avatar}
                    alt={d.title}
                  />
                  <h3 className={style.miniContainer__title}>{d.title}</h3>
                </div>
                <p className={style.miniContainer__category}>{d.category}</p>
                <p className={style.miniContainer__amount}>{d.amount}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Transactions;
