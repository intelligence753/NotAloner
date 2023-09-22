import '../sassStyles/signup.scss';
import {React, useState} from 'react';
import { useNavigate } from "react-router-dom";
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
// import firebase from '../utils/firebase';

function Signup(){
    const navigate = useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    function onSubmit(){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            var user = userCredential.user;
            navigate("/")
           
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
    
    };
    return(
        <main data-page="-">
            <section className="banner_section">
                <div className="container">
                    <div className="pagetitle">
                        <h1 className="pagetitle_cn">會員註冊</h1>
                        <div className="pagetitle_en">SIGN UP</div>
                    </div>
                </div>
                {/* <div className="banner pc" style="background-image:url(dist/images/banner_signup.jpg) ;"></div>
                <div className="banner mo" style="background-image:url(dist/images/banner_signup_mb.jpg) ;"></div> */}
            </section>
            <section className="form_section">
                <div className="container">
                    <div >
                        {/* <div className="form-group req">
                            <label className="form-label" htmlFor="name">姓名<span>*</span></label>
                            <input className="form-input" id="name" type="text" placeholder="請輸入姓名"/>
                            <small>必填</small>
                        </div> */}
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">帳號<span>*</span></label>
                            <input className="form-input" id="email" type="email" placeholder="請輸入您常用的Email" value={email} onChange={(e) => {setEmail(e.target.value)	}}/>
                            <small>請輸入正確的Email格式</small>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="password1">密碼設定<span>*</span></label>
                            <input className="form-input" id="password1" type="password" placeholder="至少6字元以上" value={password} onChange={ (e) => {setPassword(e.target.value)}}/>
                            <small>至少6字元以上</small>
                        </div>
                        {/* <div className="form-group">
                            <label className="form-label" htmlFor="password2">密碼確認<span>*</span></label>
                            <input className="form-input" id="password2" type="password" placeholder="請再次輸入密碼"/>
                            <small>與密碼不符</small>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="birthday">生日<span>*</span></label>
                            <input className="form-input" id="birthday" type="date"/>
                            <small>必填</small>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="phone">手機<span>*</span></label>
                            <input className="form-input" id="phone" type="number" placeholder="請輸入手機號碼" oninput="if(value.length>10)value=value.slice(0,10)"/>
                            <small>請輸入手機號碼，例如：0912345678</small>
                        </div> */}
                        <div className="btnwrap">
                            <a className="btn blue" href="#" onClick={onSubmit}>註冊 <span></span></a>
                            {/* <input className="btn blue" type="submit" value="註冊" /> */}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Signup