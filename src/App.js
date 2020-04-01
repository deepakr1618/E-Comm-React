import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import './App.css';
import {Route , Switch} from 'react-router-dom'
import Header from './components/header/header.component'
import SignInSignOutPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser:null
    }
  }

  unsubscribeAuth = null

  componentDidMount(){
    this.unsubscribeAuth = auth.onAuthStateChanged(async (user)=>{
      if(user){
        const userRef = await createUserProfileDocument(user)
        userRef.onSnapshot(async snapshot => {
          await this.setState({
            currentUser : {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      else{
        this.setState({
          currentUser:null
        })
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeAuth()

  }

  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/> 
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInSignOutPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
