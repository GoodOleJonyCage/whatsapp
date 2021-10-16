export const SignIn = (props) => {
    return props.UserSignedIn() ?
        <button>
            <i onClick={() => props.SignOutGoogle()} className="material-icons">person</i>
        </button> :
        <button>
            <i onClick={() => props.SignInGoogle()} className="material-icons">person_off</i>
        </button>
}