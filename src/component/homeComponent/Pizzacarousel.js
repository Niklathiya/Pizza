import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useEffect, useState } from 'react'
import {
    addDoc,
    collection,
    doc,
    updateDoc,
    getDocs,
} from "firebase/firestore";
import { fireStoreDb } from "../../firebaseConfig";

const Pizzacarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 3000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 464,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [data, setData] = useState([]);
    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(fireStoreDb, "pizzas"));
        // console.log(querySnapshot.docs);

        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().pizza_name,
            description: doc.data().description,
            price: doc.data().price,
            image: doc.data().pizza_image,
            liked: doc.data().liked || false,
        }));

        setData(data);
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

    return (
        <div>
            <div className="carousel">
                <Slider {...settings} className="custom-carousel-dots">
                    {data.map((item) => (
                        <div key={item} className="pizzacarousel">
                            <div className='like_button_box'>
                                <button
                                    onClick={() => handleLike(item.id, !item.liked)}
                                    style={{ color: item.liked ? "red" : "black" }}
                                    className="like_button">
                                    <i className="fa-solid fa-heart"></i>
                                </button>
                            </div>
                            <Link to="/Products">
                                <img src={item.image} />
                                <h3>{item.name}</h3>
                            </Link>
                            <div className="carousel_title">
                                <p>{item.description}</p>
                                <div className="alignment">
                                    <div className="alignment carousel_title_space">
                                        <p>12"</p>
                                        <p>{item.price}</p>
                                    </div>
                                    <div className="alignment carousel_title_space">
                                        <p>18"</p>
                                        <p>$15.0</p>
                                    </div>
                                    <div className="alignment carousel_title_space">
                                        <p>20"</p>
                                        <p>$20.0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div >
    )
}

export default Pizzacarousel
