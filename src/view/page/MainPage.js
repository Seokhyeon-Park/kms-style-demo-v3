import style from "../../style/page/MainPage.module.css"
import React from "react";

function MainPage() {

  return (
    <div className={style.mainContainer}>
      <div className={style.topBar}>
        <label className={style.normalFont}>Stupigs</label>
        <img src="/img/my.jpeg" alt="" className={style.miniSizeProfile} />
      </div>

      <div className={style.containerRow}>
        <div className={`${style.boxStyle} ${style.normalSizeBox}`}>

        </div>
        <div className={`${style.boxStyle} ${style.bigSizeBox}`}>
          
        </div>
      </div>
      <div className={style.containerRow}>
        <div className={`${style.boxStyle} ${style.bigSizeBox}`}>

        </div>
        <div className={`${style.boxStyle} ${style.normalSizeBox}`}>
          
        </div>
      </div>
    </div>
  );
}

export default MainPage;