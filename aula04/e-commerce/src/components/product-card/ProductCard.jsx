import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import AddCheckout from '../add-checkout/AddCheckout'
import Currency from '../currency/Currency'
import PropTypes from 'prop-types'

const ProductCard = ({id, name, price, image, description}) =>

    <article className="product-card">
        <img src={image} alt="" width="100px"/>
        <div className="title">{name}</div>
        <div className="price">
            <Currency value={price} />
        </div>

        <AddCheckout />

        <Link to={`/details/${id}`}>+ detalhes</Link>
    </article>

ProductCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default ProductCard