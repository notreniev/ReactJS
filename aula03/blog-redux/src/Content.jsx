import React from 'react'
import { connect } from 'react-redux'

class Content extends React.Component {
    render () {
        return <div className="content">
            {this.props.loggedIn ? 
            <div>
                <h1>Blog do {this.props.username}</h1>
            </div>
             : 
            <div>
                <h1>Usuário não autenticado</h1>
            </div>
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    const { userLogged, username } = state
    return {
        loggedIn: userLogged,
        username: username
    }
}

export default connect(mapStateToProps)(Content)