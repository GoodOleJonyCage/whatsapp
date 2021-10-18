import { useState,useEffect} from 'react'
import { Body } from './Body'
import { Login } from './Login';
import { UserSignedIn, SignInGoogle, SignOutGoogle } from './FirebaseService'
import firebase from "firebase/app";
import './App.css';
import { CropLandscapeOutlined } from '@material-ui/icons';
// import { Switch, BrowserRouter, Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { useHistory ,Redirect} from "react-router-dom";
// import ReactObserver from 'react-event-observer';

function App() {

  const [authenticated, setauthenticated] = useState(false);
  
  firebase.auth().onAuthStateChanged((user, context) => {
    if (UserSignedIn()) {
      setauthenticated(true);
      console.log('A');
    } else {
      console.log('B');
      setauthenticated(false);
    }
  });

//   useEffect(() => {
//     const firebaseObserver = ReactObserver();
//     firebaseObserver.subscribe('authStateChanged', data => {
//       console.log(data)  ;
//       setAuthenticated(data);
//         //setIsLoading(false);
//     });
//     return () => { firebaseObserver.unsubscribe('authStateChanged'); }
// }, []);

  return (
    <div className="App">
      {
        authenticated ? <Body/> : <Login  SignInGoogle={SignInGoogle} SignOutGoogle={SignOutGoogle} UserSignedIn={UserSignedIn}/>
      } 
    </div>
  );
}

export default App;
