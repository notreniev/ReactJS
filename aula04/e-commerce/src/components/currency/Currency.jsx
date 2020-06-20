import React from 'react'
import './Currency.css'

export const Currency = ({value}) => 
    <span className="currency">
        R$ {value}
    </span>

export default Currency