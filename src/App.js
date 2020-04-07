import React from 'react';
import './App.css';
import {Route , Switch ,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'



import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import ShopPage from './pages/shop/shop.component'
import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import SignInSignOutPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component'
import  {setCurrentUser} from './redux/user/user.actions'


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


const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})


//SENDS A FUNCTION NAMED setCurrentUser as props to the componenet which can be called to dispatch
//to set current user!!HOLY BALLS
const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})





export default connect(
  mapStateToProps ,
  mapDispatchToProps
  )(App);
