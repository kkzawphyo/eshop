import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, description, rating}) {

    const [state, dispatch] = useStateValue();    

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
                title:title
            },
        });
    };

    return (
        <div className="product">
            <img src={image} alt="ecommerce"/>
            <div className="product__info">
                <p><strong>{"Product : " + title}</strong></p>
                <p className="product__price">
                    {/* <small>Price : $</small> */}
                    <strong>Price&emsp;&nbsp;{" : $" + price}</strong>
                </p>
                <p><strong>{"Description : " + description}</strong></p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
                </div>
            </div>           

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
