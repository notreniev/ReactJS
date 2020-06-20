import React from "react";
import { connect } from "react-redux";
import { signOut } from './actions'

class Header extends React.Component {
  logout = () => {
    this.props.dispatch(signOut());
  };

  render() {
    return (
      <header>
        <h1>Blog</h1>
        {this.props.loggedIn && (
          <>
            <div className="user">Bem-vindo @{this.props.username}</div>
            <button onClick={this.logout}>Sair</button>
          </>
        )}
      </header>
    );
  }
}

const mapStateToProps = state => {
  const { userLogged, username } = state
  return {
    loggedIn: userLogged || false,
    username: username
  };
};

export default connect(mapStateToProps)(Header);
