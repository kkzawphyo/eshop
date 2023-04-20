import React from "react";
import "./Home.css";
import Product from "./Product";
import { useEffect,useState } from "react";
import Slideshow from "./Slide";

function Home() {
    const [product,setProduct] =useState([]);

     const fetchData = () => {
        return fetch("http://localhost:4000/product/getNewProduct")
        .then((response)=>response.json())
        .then((data)=>setProduct(data));
     }

     useEffect(() => {
        fetchData();
     },[]);

        const rows = [...Array(Math.ceil(product.length/4))];
        const productRows = rows.map((row,idx) => product.slice(idx * 4 , idx * 4 + 4));
        const content = productRows.map((row,i) => (
            <div key={i} className="home__row" >
                {row.map(product=>
                    <Product
                    key={product.pro_productId}
                    id={product.pro_productId}
                    title={product.pro_Name}
                    price={product.pro_price}
                    rating={5}
                    description={product.pro_description}
                    image={process.env.PUBLIC_URL + "uploads/" + product.photo[0]}
                    />
                    )}
            </div>
        ))

    return (
        <div className="home">
            <div className="home__container">
                {/* <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="ecommerce" className="home__image" /> */}
                <Slideshow></Slideshow>
                {content}
                
            </div>   
        </div> 
    )
}

export default Home
