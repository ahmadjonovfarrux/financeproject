import { useCollection } from "../../hooks/useCollection";
import style from "./Posts.module.scss";

function Posts() {
  const { data } = useCollection("pots");
  const color = ["green", "cyan", "navy", "yellow", "purple"];
  return (
    <div className={style.pots}>
      <div className={style.pots__header}>
        <h2 className={style.pots__header__title}>Pots</h2>
        <button>+Add New Pot</button>
      </div>
      <div className={style.pots__gridContainer}>
        {data &&
          data.map((d) => {
            console.log(d);
            return (
              <div key={d.id} className={style.pots__miniContainer}>
                <div className={style.miniContainer__head}>
                  <h2 className={style.miniContainer__title}>
                    <div className={`${style.miniContainer__dot}`}></div>
                    {d.name}
                  </h2>
                  <img src="../images/icon-ellipsis.svg" alt="image of dotes" />
                </div>
                <div className={style.miniContainer__static}>
                  <div>
                    <p>Total Saved</p>
                    <h3>${d.total}</h3>
                  </div>
                  <div className={style.staticBox}>
                    <div className={style.static__innerBox}></div>
                  </div>
                  <p className={style.miniContainer__totalTarget}>
                    <span>50%</span>
                    <span>Total of ${d.target}</span>
                  </p>
                </div>
                <div className={style.miniContainer__buttons}>
                  <button className={style.miniContainer__btn}>
                    + Add Money
                  </button>
                  <button className={style.miniContainer__btn}>Withdraw</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Posts;
