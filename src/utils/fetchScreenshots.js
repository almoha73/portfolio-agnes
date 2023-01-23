import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

export const getScreenshots = async () => {
	try {
		return await getDocs(collection(db, "portfolio"));
	} catch (error) {
		console.log(error);
	}
};
