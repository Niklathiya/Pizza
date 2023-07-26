import React, { useEffect, useState } from 'react'
import {
    addDoc,
    collection,
    doc,
    updateDoc,
    getDocs,
    setDoc,
    deleteDoc
} from "firebase/firestore";
import { fireStoreDb } from '../firebaseConfig';

const Cart = () => {
    // const [data, setData] = useState([]);
    const [data, setData] = useState([]);

    const fetchCartData = async () => {
        // try {
        const querySnapshot = await getDocs(collection(fireStoreDb, "cart"));
        const data = []
        querySnapshot.forEach((doc) => {
            if (doc.data().name) {
                data.push({
                    id: doc.id,
                    name: doc.data().name,
                    description: doc.data().description,
                    price: doc.data().price,
                    image: doc.data().image,
                    quantity: 1,
                })
            }
        });
        setData(data);
    };


    useEffect(() => {
        fetchCartData();
    }, []);

    // const removeFromCart = async (id) => {

    //     // Remove the product from the cart state.
    //     // setCart((prevCart) => prevCart.filter((item) => item.id == id));

    //     try {
    //         // Remove the product from the Firestore database.
    //         const a= await deleteDoc(doc(fireStoreDb, 'cart', id));

    //         console.log('Product removed from Firestore:', id);
    //         setCart(cart)
    //     } catch (error) {
    //         console.error('Error removing from cart: ', error);
    //     }
    // };

    const removeFromCart = async (id) => {
        await deleteDoc(doc(fireStoreDb, "cart", id));
        fetchCartData();
    };

    // const removeFromCart = async (id) => {
    //     try {
    //         // Step 1: Remove item locally from cart state
    //         setCart((prevCart) => prevCart.filter((item) => item.id !== id));

    //         // Step 2: Remove item from Firestore
    //         await deleteDoc(doc(fireStoreDb, "cart", id));

    //         // Step 3: Fetch updated cart data (assuming fetchCartData is a valid function)
    //         fetchCartData();

    //         console.log(`Item with id ${id} removed from cart successfully.`);
    //     } catch (error) {
    //         console.error("Error removing item from cart:", error);
    //     }
    // };

    return (
        <div>
            <div>
                <h1>Cart</h1>
                <div>
                    {data.map((item) => (
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{item.quantity}</p>
                            <img src={item.image} alt={item.name} />
                            <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cart