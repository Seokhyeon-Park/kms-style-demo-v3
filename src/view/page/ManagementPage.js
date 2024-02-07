import style from '../../style/page/Management.module.css'
import React from "react";
import CreateAccount from "../component/CreateAccount";

function ManagementPage() {
    const menu = [
        {
            title: "계정 발급",
            event: null,
        }
    ];
    return(
        <div className={style.backgroundContainer}>
            <div className={style.mainContainer}>
                <div className={style.menuContainer}>
                    <div className={style.titleContainer}>
                        <label className={style.labelTitle}>StupidPigs</label>
                        <label className={style.labelSubTitle}>Platform</label>
                    </div>

                    {/* Trans to Component, controlled by list? */}
                    <div className={`${style.MenuButton} ${style.selectedMenuButton}`}>
                        <label className={style.buttonTitle}>계정 발급</label>
                    </div>
                    <div className={`${style.MenuButton}`}>
                        <label className={style.buttonTitle}>계정 관리</label>
                    </div>
                    <div className={`${style.MenuButton}`}>
                        <label className={style.buttonTitle}>기타 설정</label>
                    </div>
                </div>
                <div className={style.viewContainer}>
                    {/*  Using Component  */}
                    <CreateAccount />
                </div>
            </div>
        </div>
    );
}

export default ManagementPage;