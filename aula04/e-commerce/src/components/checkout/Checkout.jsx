import React from 'react'
import './Checkout.css'
import CheckoutProductList from '../checkout-product-list/CheckoutProductList'
import Currency from '../currency/Currency'
import { clearCheckout } from '../../store/actions'
import { connect } from 'react-redux'

const Checkout = ({ checkout, dispatch }) =>
    <>
    {checkout &&    
        <aside className="checkout">
            <h1>Lista de produtos</h1>

            <CheckoutProductList />

            <div className="total">
                <Currency value={100}/>
            </div>
            <div className="actions">
                <button onClick={() => dispatch(clearCheckout())}>
                    Cancelar a compra
                </button>
            </div>
        </aside>
    }
    </>

const mapStateToProps = ({ checkout }) => ({checkout})

export default connect(mapStateToProps)(Checkout)