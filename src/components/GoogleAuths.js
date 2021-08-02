import React,{Component} from "react"
import {connect} from "react-redux"
import {signIn,signOut} from "../actions"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner"
class GoogleAuth extends Component{
componentDidMount(){
    if(window.gapi){
    window.gapi.load('client:auth2',()=>{
        window.gapi.client.init({
            clientId:"94570441450-hf60iapiscamo9do2vckv1oafshhll35.apps.googleusercontent.com",
            scope:"email"
        }).then(()=>{
            this.auth=window.gapi.auth2.getAuthInstance()
           this.onAuthChange(this.auth.isSignedIn.get())
            this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })}
}
onAuthChange=(isSignedIn)=>{
if(isSignedIn){
    this.props.signIn(this.auth.currentUser.get().getId())
}
else{this.props.signOut()}
}
onSignInClick=()=>{
this.auth.signIn()
}
onSignOutClick=()=>{
this.auth.signOut()
}
renderAuth(){
    if(this.props.isSignedIn===null){
return<div>
<Loader
        type="BallTriangle"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />

</div>
    }
    else if(this.props.isSignedIn){
        return <button onClick={this.onSignOutClick} className="ui red google button">
        <i className="google icon"></i> SignOut
        </button>
    }
    else{
        return <button onClick={this.onSignInClick} className="ui green google button">

            <i className="google icon"></i>Sign In
        </button>
    }
}
    render(){
        return (
            <div> {this.renderAuth()}</div>
        )
    }
}

const mapStateToProps=(state)=>{
return {isSignedIn:state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth)