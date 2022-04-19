import React from 'react'
import {useSelector} from "react-redux";
import {Button} from "@mui/material";
import CardComponent from './CardComponent';
import '../assets/css/product.css'
import CartComponent from './CartComponent';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

export default function ProductCart() {

    const {products, carts} = useSelector(s=>s.ProductCartReducer);

    const renderCard = () => (
        products.map((product, index)=> (
            <div className="col-4 mt-3" key={index}>
            <CardComponent product={product} />
            </div>
        ))
    )

    return (
        <div className="container my-5">
            <NavLink to="/">Back to home</NavLink>
            <div className="row">
                <div className="col-8">
                    <h2>Products</h2>
                    <div className="row">
                        {renderCard()}                        
                    </div>
                </div>
                <div className="col-4">
                    <h2>Cart</h2>
                    <CartComponent />
                    <h5>Total: {carts.reduce((total, cart)=>{
                        return total+= cart.quantity*cart.price;
                    }, 0)} $</h5>
                </div>
            </div>
        </div>
    )
}
