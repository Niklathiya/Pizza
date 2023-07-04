import React, { useEffect, useState } from 'react'
import {
    addDoc,
    collection,
    getDocs,
} from "firebase/firestore";
import { fireStoreDb } from '../../firebaseConfig';

const Sample = () => {
    const [data, setData] = useState([]);
    const [newItem, setNewItem] = useState("");

    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(fireStoreDb, "users"));
        console.log(querySnapshot.docs);

        const data = [];
        querySnapshot.forEach((doc) => {
            if (doc.data().first) {
                data.push({ id: doc.id, text: doc.data().first });
            }
        });
        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleCreate = async () => {
        await addDoc(collection(fireStoreDb, "users"), {
            first: newItem,
            last: "Lovelace",
            born: 1996,
        });
        fetchData();
        setNewItem("");
    };
    return (
        <div>
            <input
                type="text"
                style={{ border: "2px soild black" }}
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                onClick={() => {
                    handleCreate();
                }}
            >
                Add
            </button>
        </div>
    )
}

export default Sample
