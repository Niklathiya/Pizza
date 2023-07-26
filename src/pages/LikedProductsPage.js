import React, { useEffect, useState } from 'react'
import {
    addDoc,
    collection,
    doc,
    updateDoc,
    getDocs,
    setDoc
} from "firebase/firestore";
import { fireStoreDb } from '../firebaseConfig';

const LikedProductsPage = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(fireStoreDb, "pizzas"));
        console.log(querySnapshot.docs);

        const data = []
        querySnapshot.forEach((doc) => {
            if (doc.data().liked === true) {
                data.push({
                    id: doc.id,
                    name: doc.data().pizza_name,
                    description: doc.data().description,
                    price: doc.data().price,
                    image: doc.data().pizza_image,
                    liked: doc.data().liked || false,
                })
            }
        })
        setData(data);
    };

    const handleLike = async (id, liked) => {
        const productRef = doc(collection(fireStoreDb, "pizzas"), id);

        try {
            // Update the like status in the Firestore database
            await updateDoc(productRef, { liked });
            // Update the state to reflect the updated like status
            setData((prevData) =>
                prevData.map((item) =>
                    item.id === id ? { ...item, liked } : item
                )
            );

        } catch (error) {
            console.error("Error updating like status: ", error);
        }

    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <div>
                {data.map((item) => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <img src={item.image} alt={item.name} />
                        <button
                            onClick={() => handleLike(item.id, !item.liked)}
                            style={{ color: item.liked ? "red" : "black" }}
                        >
                            <i className="fa-solid fa-heart"></i>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LikedProductsPage