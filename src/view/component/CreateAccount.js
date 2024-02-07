import style from '../../style/component/CreateAccount.module.css';
import React, { useState } from "react";

function CreateAccount() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');

    const setInputName = (e) => { setName(e.target.value); }
    const setInputEmail = (e) => { setEmail(e.target.value); }
    const setInputPassword = (e) => { setPassword(e.target.value); }
    const setInputConfirmPassword = (e) => { setConfirmPassword(e.target.value); }
    const setInputPhoneNumber = (e) => { setPhoneNumber(e.target.value); }

    return (
        <div className={style.formContainer}>
            <div className={style.createAccountForm}>
                <label className={style.formLabel}>Name</label>
                <input
                    type="text"
                    id="name"
                    className={style.formInput}
                    placeholder="Name"
                    value={name}
                    onChange={setInputName}
                />
                <label className={style.formLabel}>Email</label>
                <input
                    type="email"
                    id="email"
                    className={style.formInput}
                    placeholder="Email"
                    value={email}
                    onChange={setInputEmail}
                />
                <label className={style.formLabel}>Password</label>
                <input
                    type="password"
                    id="password"
                    className={style.formInput}
                    placeholder="Password"
                    value={password}
                    onChange={setInputPassword}
                />
                <label className={style.formLabel}>Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    className={style.formInput}
                    placeholder="Re-enter Password"
                    value={confirmPassword}
                    onChange={setInputConfirmPassword}
                />
                <label className={style.formLabel}>Phone Number</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    className={style.formInput}
                    placeholder="Tel"
                    value={phoneNumber}
                    onChange={setInputPhoneNumber}
                />
                <button type="submit" className={style.normalBtn} >계정 생성</button>
            </div>
        </div>
    )
}

export default CreateAccount;