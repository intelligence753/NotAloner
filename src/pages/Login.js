import '../sassStyles/login.scss';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import {React, useState} from 'react'
import { useNavigate} from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    function onSubmit(){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            navigate("/")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            alert(errorMessage)
        });
    }

    return(
        <main data-page="-">
            <section className="banner_section">
                <div className="container">
                    <div className="pagetitle">
                        <h1 className="pagetitle_cn">會員登入</h1>
                        <div className="pagetitle_en">LOGIN</div>
                    </div>
                </div>
                {/* <div className="banner pc" style="background-image:url(dist/images/banner_signup.jpg) ;"></div>
                <div className="banner mo" style="background-image:url(dist/images/banner_signup_mb.jpg) ;"></div> */}
            </section>
            <section className="form_section">
                <div className="container">
                    <div className="wrap animatable fadeInUp">
                        <div className="imgwrap">
                            <img src="dist/images/login_img.png" alt=""/>
                        </div>
                        <div className="main_wrap">
                            <div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">帳號<span>*</span></label>
                                    <input className="form-input" id="email" type="email" placeholder="請輸入您註冊的Email" value={email} onChange={ (e) => {setEmail(e.target.value)	}}/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="password">密碼<span>*</span></label>
                                    <input className="form-input" id="password" type="password" placeholder="至少6字元以上" value={password} onChange={ (e) => {setPassword(e.target.value)}}/>
                                </div>
                                <a className="forgetlink" href="forgot-password.php">忘記密碼</a>
                                <div className="btnwrap">
                                    <a className="btn blue" href="#" onClick={onSubmit}>登入 <span></span></a>
                                    {/* <input className="btn blue" type="submit" value="登入" /> */}
                                </div>
                            </div>
                            <div className="signuplink">
                                <div className="text">
                                    還不是會員嗎? &nbsp;&nbsp;<a href="signup.php">立即註冊</a>
                                </div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Login