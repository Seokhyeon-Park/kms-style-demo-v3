import style from '../../style/./page/LoginPage.module.css'
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function ManagerLoginPage() {
    // Actions
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    const toLoginPage = () => {
        navigate('/');
    }

    const toManagementPage = () => {
        navigate('/management');
    }

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    // Functions
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const setInputId = (e) => {
        setId(e.target.value);
    }

    const setInputPw = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className={style.backgroundContainer}>
            <div className={style.mainContainer}>
                <div className={windowWidth > 1550?style.sideContainer:style.sideContainerOff}>
                    <label className={style.mainTitle}>StupidPigs</label>
                    <label className={style.siTitle}>Platform</label>
                </div>
                <div className={windowWidth > 1550?style.loginContainer:style.loginContainerOff}>
                    <img src="./img/pig.png" className={style.icon} />
                    <label className={style.loginLabel}>관리자 이메일</label>
                    <input
                        type="text"
                        id="id"
                        className={style.loginInput}
                        placeholder="Email"
                        value={id}
                        onChange={setInputId}
                    />
                    <label className={style.loginLabel}>패스워드</label>
                    <input
                        type="password"
                        id="id"
                        className={style.loginInput}
                        placeholder="Password"
                        value={password}
                        onChange={setInputPw}
                    />
                    <div className={style.linkContainer}>
                        <label className={style.linkLabel} onClick={toLoginPage}>사용자 페이지로 이동</label>
                    </div>
                    <button type="submit" className={style.normalBtn} onClick={toManagementPage} >관리자 로그인</button>
                </div>
            </div>
        </div>
    );
}

export default ManagerLoginPage;