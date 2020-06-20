import React from 'react'
import { connect } from 'react-redux'
import { addCheckout } from '../../store/actions'

const AddCheckout = ({dispatch}) => 
    <button onClick={() => dispatch(addCheckout())}>
        Comprar
    </button>

export default connect()(AddCheckout)