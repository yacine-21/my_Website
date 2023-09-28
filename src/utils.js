import { collection, getDocs } from 'firebase/firestore'
import { db } from './firebaseDB'

export const getCollection = async (collectionData) => {
    const querySnapshot = await getDocs(collection(db, collectionData))
    const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }))
    return newData
}
