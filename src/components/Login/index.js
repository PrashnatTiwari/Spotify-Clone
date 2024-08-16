import {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    return (
      <div className="login-bg-container">
        <div className="login-container">
          <img
            src="https://res.cloudinary.com/dlpf8fdvi/image/upload/v1723809314/Vector_ebf7l8.png"
            className="spotify-vector-image"
            alt=""
          />
          <p className="spotify-heading">Spotify Remix</p>
          <form className="login-user-form-container">
            <div className="label-input-container">
              <label className="username-heading">USERNAME</label>
              <input type="text" className="input-field" />
            </div>
            <div className="label-input-container">
              <label className="username-heading">PASSWORD</label>
              <input type="password" className="input-field" />
            </div>
          </form>
          <button type="button" className="login-button">Login</button>
        </div>
      </div>
    )
  }
}

export default Login
