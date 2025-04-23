import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
// import { toast } from "sonner";
import toast from "react-hot-toast";

export const useCollectionsData = (names) => {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(false);

  useEffect(() => {
    setIspending(true);
    async function fetchMultipleCollections() {
      try {
        const balanceRef = collection(db, "balance");
        const budgetRef = collection(db, "budgets");
        const potsRef = collection(db, "pots");
        const transactionsRef = collection(db, "transactions");

        const [
          balanceSnapshot,
          budgetSnapshot,
          potsSnapshot,
          transactionsSnapshot,
        ] = await Promise.all([
          getDocs(balanceRef),
          getDocs(budgetRef),
          getDocs(potsRef),
          getDocs(transactionsRef),
        ]);
        const budget = budgetSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const balance = {
          id: balanceSnapshot.docs[0].id,
          ...balanceSnapshot.docs[0].data(),
        };
        // const balance = balanceSnapshot.docs.map((doc) => ({
        //   id: doc.id,
        //   ...doc.data(),
        // }));
        const transactions = transactionsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const pots = potsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData({ budget, balance, transactions, pots });
        // console.log(budget, balance, transactions, pots);
      } catch (error) {
        toast.error(error.message);
        console.error("Malumotanrni olshida xatolik:", error);
      } finally {
        setIspending(false);
      }
    }
    fetchMultipleCollections();
  }, []);
  return { data, isPending };
};
