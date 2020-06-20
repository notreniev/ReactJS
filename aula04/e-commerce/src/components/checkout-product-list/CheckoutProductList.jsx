import React from 'react'
import Currency from '../currency/Currency'
import './CheckoutProductList.css'

const CheckoutProductList = () => 
    <ul className="checkout-product-list">
        <li>
            <span className="product">Nome do produto</span>
            <span className="price">
                <Currency value={100} />
            </span>
        </li>
    </ul>

export default CheckoutProductList