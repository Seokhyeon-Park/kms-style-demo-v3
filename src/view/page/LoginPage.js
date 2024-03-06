import style from '../../style/./page/LoginPage.module.css'
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
    // Actions
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
        };

        window.addEventListener('resize', handleResize);

        return () => { window.removeEventListener('resize', handleResize); }
    }, []);

    // Functions
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [chkPassword, setChkPassword] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhoneNumber] = useState('');

    const setInputId = (e) => { setId(e.target.value); }
    const setInputPw = (e) => { setPassword(e.target.value); }
    const setInputChkPw = (e) => { setChkPassword(e.target.value); }
    const setInputName = (e) => { setName(e.target.value); }
    const setInputCompany = (e) => { setCompany(e.target.value); }
    const setInputEmail = (e) => { setEmail(e.target.value); }
    const setInputPhoneNumber = (e) => { setPhoneNumber(e.target.value); }

    const handleSignUpClick = () => { setIsSignUp(!isSignUp); }

    // Functions
    const toLoginPage = () => { handleSignUpClick(); }
    const toMainPage = () => { navigate('/main'); }

    const enterKeyEvent = (e) => {
        if(e.key === 'Enter') { login(); }
    }

    const login = async () => {
        toMainPage();
        
        return;

        // 하단 코드 참고
        try {
            const response = await axios.post(
                'http://localhost:8080/api/user/signIn',
                {
                    'username': id,
                    'password': password
                }
            );

            if(response.status === 200) {
                if(response.data.res_code === '0000') {
                    // SignIn Success

                    toMainPage();
                } else {
                    // SignIn Failure
                }
            } else {
                // Response Failure
            }
        } catch (error) {
            // Error
        }
    }

    return (
        <div className={style.backgroundContainer}>
            <div className={style.mainContainer}>
                <div className={windowWidth > 1650?style.sideContainer:style.sideContainerOff}>
                    <label className={style.mainTitle}>Stupigs</label>
                    <img src="/img/pig.png" alt="" className={style.Logo} />
                </div>
                <div className={isSignUp ? (windowWidth > 1650 ? `${style.loginContainer} ${style.active}` : `${style.loginContainerOff} ${style.active}`) : (windowWidth > 1650 ? style.loginContainer : style.loginContainerOff)}>
                    {isSignUp ? (
                        <>
                            <label className={style.loginLabel}>아이디</label>
                            <input
                                type="text"
                                id="id"
                                className={style.loginInput}
                                placeholder="ID"
                                value={id}
                                onChange={setInputId}
                            />
                            <label className={style.loginLabel}>패스워드</label>
                            <input
                                type="password"
                                id="password"
                                className={style.loginInput}
                                placeholder="Password"
                                value={password}
                                onChange={setInputPw}
                            />
                            <label className={style.loginLabel}>패스워드 확인</label>
                            <input
                                type="password"
                                id="chkPassword"
                                className={style.loginInput}
                                placeholder="Password"
                                value={chkPassword}
                                onChange={setInputChkPw}
                            />
                            <label className={style.loginLabel}>성함</label>
                            <input
                                type="text"
                                id="name"
                                className={style.loginInput}
                                placeholder="Name"
                                value={name}
                                onChange={setInputName}
                            />
                            <label className={style.loginLabel}>이메일</label>
                            <input
                                type="email"
                                id="email"
                                className={style.loginInput}
                                placeholder="Email"
                                value={email}
                                onChange={setInputEmail}
                            />
                            <label className={style.loginLabel}>전화번호</label>
                            <input
                                type="text"
                                id="phone"
                                className={style.loginInput}
                                placeholder="Phone Number"
                                value={phone}
                                onChange={setInputPhoneNumber}
                            />
                            <label className={style.loginLabel}>회사명</label>
                            <input
                                type="text"
                                id="company"
                                className={style.loginInput}
                                placeholder="Company"
                                value={company}
                                onChange={setInputCompany}
                            />
                            <button type="submit" className={style.normalBtn} onClick={toLoginPage}>
                                회원가입
                            </button>
                        </>
                    ) : (
                        <>
                            <label className={style.loginLabel}>아이디</label>
                            <input
                                type="text"
                                id="id"
                                className={style.loginInput}
                                placeholder="ID"
                                value={id}
                                onChange={setInputId}
                                onKeyDown={enterKeyEvent}
                            />
                            <label className={style.loginLabel}>패스워드</label>
                            <input
                                type="password"
                                id="id"
                                className={style.loginInput}
                                placeholder="Password"
                                value={password}
                                onChange={setInputPw}
                                onKeyDown={enterKeyEvent}
                            />
                            <div className={style.linkContainer}>
                                <label className={style.linkLabel} onClick={handleSignUpClick}>계정신청</label>
                            </div>
                            <button type="submit" className={style.normalBtn} onClick={toMainPage}>
                                로그인
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LoginPage;