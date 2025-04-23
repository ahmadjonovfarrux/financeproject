import { useCollection } from "../../hooks/useCollection";
import style from "./Transaction.module.scss";

function Transactions() {
  const { data } = useCollection("transactions");
  console.log(data);
  return <div>Transactions</div>;
}

export default Transactions;
