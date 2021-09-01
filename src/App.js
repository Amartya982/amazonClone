import { useEffect } from "react"
import Header from "./component/Header/Header"
import Home from "./component/Home/Home"
import Checkout from "./component/Checkout/Checkout"
import './App.css';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Login from "../src/component/authentication/Login"
import {auth} from "../src/firebase"
import {useStateValue} from "../src/State/StateProvider"
 
function App() {
  const[{user}, dispatch] = useStateValue();
  useEffect(() => {
  // will only run once when the app component loads...

auth.onAuthStateChanged(authUser => {
console.log("THE USER IS >>>", authUser);

if(authUser){
//the user just logged in / the user was logged in
dispatch ({
type:"SET__USER",
user:authUser


})


}else {

  dispatch ({
    type:"SET_USER",
    user:null
  })
}
})

  },[])
  return (
    <Router>
    <div className="app">
    
    <Switch>
    <Route path="/checkout">
    <Checkout />
 
    </Route>
    <Route path="/login">
  <Login />
    </Route>

    <Route path="/">
    <Header />
    <Home />
    
    </Route>


    </Switch>
    </div>

    </Router>
  );
}

export default App;
