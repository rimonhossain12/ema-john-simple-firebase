import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* steps for authentication
------------
step-1: initial setup
1. create project
2. create web app
3. get configaration
4. initialize firebase
5. Enable auth method
Step-2 : setp up component
1.Create Login Component
2.Create Register Component
3.Create Route for Login and Register
----------------------
Setp-3: set auth system
1.setup sing in method
2. setpu sing out method
3. user state
4. Special observer;
5.return necessary method and states from userFirebase
------------

Step 4: create aut create hook (useAuth)
1. create a auth context
2. create context provider
3. set context provider context value
4. use auth provider
5. create useAuth Hook
------------
Step 5:
1.create private Route
2. Set private Route
*/