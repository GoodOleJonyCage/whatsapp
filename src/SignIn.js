export const SignIn = (props) => {

    return props.UserSignedIn() ?
        <button onClick={() => { props.SignOutGoogle() }} className="button">Out</button> :
        <button onClick={() => { props.SignInGoogle() }} className="button" >In</button>
}