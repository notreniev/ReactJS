import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from './actions'

class Login extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            passoword: ''
        }
    }

    handleUserSignin = () => {
        this.props.dispatch(signIn(this.state.username))
    }

    handleUserSignOut = () => {
        this.props.dispatch(signOut())
    }

    handleUsernameChange = (evt) => {
        this.setState({
            username: evt.target.value
        })
    }

    handlePasswordChange = (evt) => {
        this.setState({
            password: evt.target.value
        })
    }

    render () {
        if (this.props.loggedIn){
            return null
        }

        return <div className="container">
            <div className="login">
                <p>Fazer login</p>

                <br/>

                <label>Usuário</label>
                <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />

                <br/>

                <label>Senha</label>
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />

                <br/>

                <button onClick={this.handleUserSignin} >Entrar</button>
            </div>
        </div>        
    }
}

const mapStateToProps = (state) => {
    const { userLogged } = state

    return {
        loggedIn: userLogged || false
    }
}

export default connect(mapStateToProps)(Login)