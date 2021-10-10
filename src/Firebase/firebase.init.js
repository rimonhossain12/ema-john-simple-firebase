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
Step-2 :
1.Create Login Component
2.Create Register Component
3.Create Route for Login and Register
----------------------
Setp-3:
1.setup sing in method
2. setpu sing out method
3. user state
4. Special observer;
*/