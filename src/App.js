import React from 'react';
import './App.css';
import {Route , Switch ,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import ShopPage from './pages/shop/shop.component'
import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import SignInSignOutPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './components/checkout/checkout.component'


import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'



class App extends React.Component {
  

  unsubscribeAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubscribeAuth = auth.onAuthStateChanged(async (user)=>{
      if(user){
        const userRef = await createUserProfileDocument(user)
        
        userRef.onSnapshot(async snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
          })
      }
      setCurrentUser(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeAuth()

  }

  render(){
    return (
      <div>
        <Header/> 
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route exact path="/checkout" component={CheckoutPage}></Route>
          <Route exact path="/signin" render={
            ()=>(
                this.props.currentUser ? 
                <Redirect to="/"></Redirect> :
                <SignInSignOutPage></SignInSignOutPage>
              )
          }></Route>
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})





export default connect(
  mapStateToProps ,
  mapDispatchToProps
  )(App);
