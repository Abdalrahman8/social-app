import "./Register.scss";

import { Link } from "react-router-dom";

export default function Register() {
   return (
      <div className="login">
         <div className="loginWrapper">
            <div className="loginLeft">
               <h3 className="loginLogo">Tetshsocial</h3>
               <span className="loginDesc">
                  Connect with friends and the world around you on Lamasocial.
               </span>
            </div>
            <div className="loginRight">
               <div className="loginBox">
                  <input placeholder="Username" className="loginInput" />
                  <input placeholder="Email" className="loginInput" />
                  <input placeholder="Password" className="loginInput" />
                  <input placeholder="Password Again" className="loginInput" />
                  <button className="loginButton">Sign Up</button>
                  <button className="loginRegisterButton">
                     <Link exact to="/login" className="link">
                        Log into Account
                     </Link>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
