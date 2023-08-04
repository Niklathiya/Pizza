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


const Products = () => {
    const [data, setData] = useState([]);


    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(fireStoreDb, "pizzas"));
        console.log(querySnapshot.docs);

        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().pizza_name,
            description: doc.data().description,
            price: doc.data().price,
            image: doc.data().pizza_image,
            liked: doc.data().liked || false,
        }));
        setData(data);

        // disabled button after add to cart
        const dataWithAddedToCart = data.map(item => ({ ...item, addedToCart: false }));
        setData(dataWithAddedToCart);
    };

    useEffect(() => {
        fetchData();
    }, []);

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

    const addToCart = async (cart) => {
        await addDoc(collection(fireStoreDb, "cart"), {
            id: cart.id,
            name: cart.name,
            description: cart.description,
            price: cart.price,
            image: cart.image,
            quantity: 1,
        });
        // Add the product to the cart collection in Firestore

        // disabled button after add to cart
        setData((prevData) =>
            prevData.map((item) =>
                item.id === cart.id ? { ...item, addedToCart: true } : item
            )
        );
    };

    return (
        <div>
            <div>
                <h1>Product List</h1>
                <div className='product_page'>
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
                            <button onClick={() => addToCart(item)} disabled={item.addedToCart}>
                                {item.addedToCart ? "Added to Cart" : "Add to Cart"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products


