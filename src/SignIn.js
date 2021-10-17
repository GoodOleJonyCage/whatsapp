export const SignIn = (props) => {
    return props.UserSignedIn() ?
            <span onClick={() => props.SignOutGoogle()} className="material-icons">person</span> :
            <span onClick={() => props.SignInGoogle()} className="material-icons">person_off</span>
}