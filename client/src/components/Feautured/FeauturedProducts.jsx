import React from 'react';
import Card from "../Card/Card";
import "./FeauturedProducts.scss";
import useFetch from "../../hooks/useFetch.js";

const FeauturedProducts = ({ type }) => {
    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);
  console.log(type) 
    return (
        <div className='FeaturedProducts'>

            <div className="top">
                <h1>{type} products</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolorem iure deleniti error nihil. Earum ipsam quam, expedita quia velit ullam illo ipsa error odit doloribus corporis itaque, sed nisi. </p>
            </div>
            <div className="bottom">
                {error
                ? "something went wrong!"                
                : loading 
                ? "loading" 
                : data?.map((item) => <Card item={item} key={item.id} />)}
            </div>

        </div>
    );
};

export default FeauturedProducts;
