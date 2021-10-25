import { SignIn } from './SignIn'
import './Login.css'
export const Login = (props) => {

    return <div className="login-section">
                <div className="header">
                   Whatsapp
                </div>
                <div>
                    <h4>Log In.</h4>
                    <h5>Use a local account to log in.</h5>
                </div>
                <div>
                    <button onClick={() => { props.SignInGoogle(); }}>Sign In</button>
                    <SignIn setsignedin={props.setsignedin} SignInGoogle={props.SignInGoogle} SignOutGoogle={props.SignOutGoogle} UserSignedIn={props.UserSignedIn} />
                </div>
                <div className="footer">
                    © 2021 - Whatsapp
                </div>
            </div>;

}