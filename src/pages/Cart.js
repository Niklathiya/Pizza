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
    const [data, setData] = useState([]);

    const fetchCartData = async () => {
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
                    quantity: doc.data().quantity || 1,
                })
            }
        });
        setData(data);
    };

    useEffect(() => {
        fetchCartData();
    }, []);

    const removeFromCart = async (id) => {
        await deleteDoc(doc(fireStoreDb, "cart", id));
        fetchCartData();
    };

    const updateCartQuantity = async (id, newQuantity) => {
        newQuantity = Math.min(Math.max(newQuantity, 0), 10);

        const productRef = doc(fireStoreDb, "cart", id);

        await updateDoc(productRef, { quantity: newQuantity });
        // Update the state to reflect the updated quantity
        setData((prevData) =>
            prevData.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
        );
    };

    return (
        <div>
            <div>
                <h1>Cart</h1>
                {data.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div>
                        {data.map((item) => (
                            <div key={item.id}>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <img src={item.image} alt={item.name} />
                                <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                                {/* <div>
                                    <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>-</button>

                                    <p>{item.quantity}</p>
                                    <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
                                </div> */}
                                <div>
                                    <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>-</button>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => {
                                            const newQuantity = parseInt(e.target.value);
                                            updateCartQuantity(item.id, isNaN(newQuantity) ? 0 : newQuantity);
                                        }}
                                        min="0"
                                    />
                                    <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                                {/* Bill amount */}
                                <p>Bill Amount: {item.quantity * item.price}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div >
    )
}

export default Cart