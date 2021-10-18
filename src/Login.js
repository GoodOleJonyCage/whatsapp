import {SignIn} from './SignIn'

export const Login = (props) => {

    return <div>
        <button onClick={() => { props.SignInGoogle(); }}>Sign In</button>
        <SignIn setsignedin={props.setsignedin} SignInGoogle={props.SignInGoogle} SignOutGoogle={props.SignOutGoogle} UserSignedIn={props.UserSignedIn} />
    </div>;

}