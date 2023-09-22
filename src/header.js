import {React,useState,useHover, useEffect} from 'react'
import { Link, NavLink } from "react-router-dom";
import icon_member from './asset/images/member_icon.png'
import './sassStyles/header.scss';
import firebase from './utils/firebase';

function Header(){
    const [menuToggle, setMenuToggle] = useState(false)
    const [memberMenuIsShown, setMemberMenuIsShown] = useState(false);
    //是否為會員
    const [user,setUser] = useState(null);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((currentUser) => {
            if (currentUser) {
              var uid = currentUser.uid;
              setUser(currentUser)
              console.log('會員')
            } else {
                console.log('非會員')
            }
          });
      },[])

    return(
        <header className={menuToggle ? 'navbar open' : 'navbar'} >
            <div className="container__logo">
                <Link to="/">   
                    NotAloner
                    {/* <img src="dist/images/logo.png" alt="logo"/> */}
                </Link>
            </div>
            <nav className="container__menu">
                <ul className="menu__wrap">
                    <li className="menu__title">
                        <NavLink to="/partner">找旅伴</NavLink>
                    </li>
                    <li className="menu__title">
                        {/* <NavLink to="/contact">聯絡我們</NavLink> */}
                    </li>
                </ul>
            </nav>
            <div className="container__icon is_member">
                <div className="member " 
                    onMouseEnter={() => setMemberMenuIsShown(true)}
                    onMouseLeave={() => setMemberMenuIsShown(false)}
                    onClick={() => setMemberMenuIsShown((current) => !current)}>
                    <a className="icon" href="#" 
                        >
                        <img src={icon_member} alt="icon_member"/>
                    </a>
                    {user ? (
                        <ul className={`member_list ${memberMenuIsShown ? "open" : ""}`}>
                            <li>
                                <a href="member.php">會員專區</a>
                            </li>
                            <li>
                                <a href="#">登出</a>
                            </li>
                        </ul>
                    ):(
                        <ul className={`nonmemember_list ${memberMenuIsShown ? "open" : ""}`}>
                            <li>
                                <Link to="/login">會員登入</Link>
                            </li>
                            <li>
                                <Link to="/signup">註冊</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="container__burger" onClick={() => {setMenuToggle((current) => !current);;}}>
                <div className="burger">
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header