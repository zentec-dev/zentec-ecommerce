import { db } from "@/config/firebase-config";
import { getDoc, doc } from "firebase/firestore";
import { createCablesAdapter, createLightbulbsAdapter } from "@/adapters";

interface getProductProps {
  id: string;
}

export async function getProduct({ id }: getProductProps) {
  if (id === undefined) return undefined;

  const splitedID = id.split("_0-");
  const [, id2, productType] = splitedID;

  try {
    const docRef = doc(db, productType, id2);
    const item: any = await getDoc(docRef);

    if (item.exists()) {
      const newProduct =
        item.data().type === "lightBulbs"
          ? createLightbulbsAdapter({ ...item.data() })
          : createCablesAdapter({ ...item.data() });
      return newProduct;
    } else {
      console.log("No such document!");
      return undefined;
    }
  } catch (error) {
    console.log("error", error);
  }
}
