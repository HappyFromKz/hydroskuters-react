import leftCar from "C:/projects/react/hydroskuters-react/src/assets/banners/leftCar.png";
import rightCar from "C:/projects/react/hydroskuters-react/src/assets/banners/rightCar.png";

import React from 'react';
import cl from './HomeBanner.module.css'
import MyPicture from "../../UI/MyPicture/MyPicture";

const HomeBanner = () => {
  return (
    <div className={cl.main}>
      <div className={cl.display}>
        <div className={cl.bannerPicture}>
          <MyPicture style={{ width: '152px', height: '116px', backgroundImage: `url(${leftCar})`}}></MyPicture>
          <MyPicture  style={{ width: '175px', height: '113px', backgroundImage: `url(${rightCar})`}}></MyPicture>
        </div>
        <div className={cl.bannerPictureMobile}>
          <MyPicture style={{ width: '120px', height: '90px', backgroundImage: `url(${leftCar})`}}></MyPicture>
          <MyPicture  style={{ width: '120px', height: '85px', backgroundImage: `url(${rightCar})`}}></MyPicture>
        </div>
        <div className={cl.bannerText}>
          <p>
            CКИДКИ <br/>
            на все запчасти <br/>
            до 70%
          </p>
        </div>
      </div>
      <button>ПОСМОТЕТЬ ВСЕ</button>
    </div>
  );
};

export default HomeBanner;