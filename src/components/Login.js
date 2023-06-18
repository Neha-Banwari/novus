import React from 'react';
import {GoogleOutlined,FacebookOutlined} from '@ant-design/icons';
//import firebase from 'firebase' ;
import { auth, signInWithGoogle } from './firebase';
const Login=()=>{
    return(
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Novus Chat!</h2>

                <div
                className="login-button google"
                onClick={()=> signInWithGoogle()}
                 >
                    <GoogleOutlined />Sign In With Google 

                </div>
                <br/><br/>
                <div
                className="login-button facebook"
                onClick={()=> auth.signInWithRedirect(new auth.FacebookAuthProvider())}
                 >
                    <FacebookOutlined />Sign In With Facebook

                </div>
            </div>
        </div>
    );
}
export default Login;