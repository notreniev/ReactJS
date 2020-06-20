import React, { useState} from 'react'
import { connect } from 'react-redux'
import { signIn } from './actions'

function Login ({loggedIn, dispatch}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    if (loggedIn){
        return null
    }

    return <div className="container">
        <div className="login">
            <p>Fazer login 2</p>

            <br/>

            <label>Usuário</label>
            <input type="text" value={username} onChange={(evt) => setUsername(evt.target.value)} />

            <br/>

            <label>Senha</label>
            <input type="password" value={password} onChange={(evt) => setPassword(evt.target.value)} />

            <br/>

            <button onClick={() => dispatch(signIn(username))}>Entrar</button>
        </div>
    </div>        

}

const mapStateToProps = (state) => {
    const { userLogged } = state

    return {
        loggedIn: userLogged || false
    }
}

export default connect(mapStateToProps)(Login)