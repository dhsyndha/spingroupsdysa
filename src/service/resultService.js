import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export async function publishResult(results) {
  const docRef = await addDoc(collection(db, "results"), {
    results,
    createdAt: new Date(),
  });

  return docRef.id;
}