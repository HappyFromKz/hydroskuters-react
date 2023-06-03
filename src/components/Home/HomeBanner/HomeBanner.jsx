import React from 'react';
import cl from './HomeBanner.module.css'
import MyPicture from "../../UI/MyPicture/MyPicture";

const HomeBanner = () => {
  return (
    <div className={cl.main}>
      <div className={cl.display}>
        <div className={cl.bannerPicture}>
          <MyPicture style={{ width: '152px', height: '116px', backgroundImage: `url("https://4.downloader.disk.yandex.ru/preview/f7dca58a5b6c3cdbef2801e79c00db055bac0c544f42058d7a77e39a5a1fc935/inf/kNJTLLLDekSc_rKUl-YOqYyfQ7YZ7KXtlb0Wu9P4xSLurrdT0G4ewmZd3742jXFORv9ky0WqAyi44RFTsFz8KQ%3D%3D?uid=1684283561&filename=leftCar.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1684283561&tknv=v2&size=937x898")`}}></MyPicture>
          <MyPicture  style={{ width: '175px', height: '113px', backgroundImage: `url("https://4.downloader.disk.yandex.ru/preview/1f3c2fd53403c63333725e3cf9d3ea7271ed1b43526ad3cf040d1ee3484bfbeb/inf/grg1_I6JPuO7N-qY72DU1vkGqWdyrf65cOATmXazcMdq21vxw7Vxjr8QuUM6ITQlVru51tQ-LS_uQ1-10f-rdQ%3D%3D?uid=1684283561&filename=rightCar.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1684283561&tknv=v2&size=937x898")`}}></MyPicture>
        </div>
        <div className={cl.bannerPictureMobile}>
          <MyPicture style={{ width: '120px', height: '90px', backgroundImage: `url("https://4.downloader.disk.yandex.ru/preview/f7dca58a5b6c3cdbef2801e79c00db055bac0c544f42058d7a77e39a5a1fc935/inf/kNJTLLLDekSc_rKUl-YOqYyfQ7YZ7KXtlb0Wu9P4xSLurrdT0G4ewmZd3742jXFORv9ky0WqAyi44RFTsFz8KQ%3D%3D?uid=1684283561&filename=leftCar.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1684283561&tknv=v2&size=937x898")`}}></MyPicture>
          <MyPicture  style={{ width: '120px', height: '85px', backgroundImage: `url("https://4.downloader.disk.yandex.ru/preview/1f3c2fd53403c63333725e3cf9d3ea7271ed1b43526ad3cf040d1ee3484bfbeb/inf/grg1_I6JPuO7N-qY72DU1vkGqWdyrf65cOATmXazcMdq21vxw7Vxjr8QuUM6ITQlVru51tQ-LS_uQ1-10f-rdQ%3D%3D?uid=1684283561&filename=rightCar.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1684283561&tknv=v2&size=937x898")`}}></MyPicture>
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