import React, { Component } from 'react'
import "../bootstrap.css"
import {Link} from "react-router-dom";
import AuthenticationService from "../Services/AuthenticationService"
import { withRouter } from 'react-router';
import {Avatar} from "@material-ui/core";
import firebase from "../Services/firebase.js";
class HeaderComponent extends Component {
  
    render() {
       const isUserloggedIN=AuthenticationService.isUserloggedin();
       const isUserAdmin=AuthenticationService.isUserAdmin();
        return (
          
            <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
       <div className="navbar-brand">SrcQwikbot</div>
       <ul className="navbar-nav">
         {isUserloggedIN &&<button  type="button" className="btn btn-light mr-3"><Link to="/Welcome/-----">Home</Link></button>}
         {isUserloggedIN &&<button  type="button" className="btn btn-light mr-3"><Link to="/Chatbot">Chatbot</Link></button>}
         {isUserAdmin && <button  type="button" className="btn btn-light"><Link to="/admin">Admin</Link></button>}
                   </ul>
         <ul className="navbar-nav navbar-collapse justify-content-end">
         {! isUserloggedIN && <li className="nav-link"><Link to="/login">Login</Link></li>}
         {isUserloggedIN && <button  type="button" className="btn btn-light mr-3"  onClick={AuthenticationService.logout}><Link to="/logout">Logout</Link></button>}
         {isUserloggedIN&& <Avatar src={firebase.auth().currentUser.photoURL}></Avatar>}  
         </ul >
        </nav>
      </header>
        )
    }
}

export default withRouter(HeaderComponent);
