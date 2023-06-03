import React from 'react';
import cl from './TopAdvertising.module.css'
import 'bootstrap/dist/css/bootstrap.css';




const TopAdvertising = () => {

  const carouselItem = {id: 1, path: 'https://www.windward-islands.net/blog/wp-content/uploads/2015/06/kawazaki-jetski-1.png'}

  const carouselItems = [{id: 2, path: 'https://mir-h.ru/public/sites/tabs_photo/384/29242b.jpg?11718'},
                                                  {id: 3, path: 'https://es.boats.com/boat-content/files/2015SEA-DOO-GTI-SE_resize.jpg'},
                                                  {id: 4, path: 'https://www.sea-doo.com/content/dam/global/en/sea-doo/MY20/images/models/performance/gtr/MY20-FAMILY-New-Platform.jpeg?imwidth=2048'}]




  return (
    <div className={cl.main}>
      <div className={cl.carouselBlock}>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item carouselItemImg active">
              <img src={carouselItem.path} className="d-block w-100" alt="..."/>
            </div>
            {carouselItems.map(item =>
              <div key={item.id} className="carousel-item carouselItemImg">
                <img src={item.path} className="d-block w-100" alt="..."/>
              </div>
            )}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                  data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className={cl.promotion}>
        <div className={cl.promotionCost}>
          <div className={cl.promotionCostButton}>
            <button>Акция</button>
          </div>
          <div className={cl.promotionCostText}>
            <p>190 000 &#8381;</p>
            <p>225 000 &#8381;</p>
          </div>
        </div>
        <div className={cl.promotionInfo}>
          <img src='https://4.downloader.disk.yandex.ru/preview/033afbddfc5356136c7c00566276ca590e829a43f708eeefac5e16524d0e9fd4/inf/hMgI7h3Z5gGt5Er2AsdGytJRws4WThbNW_suoE9BIOHFhpf-aADh6Jc_3ifkB4nnaeJgCLi8tPPH8JEuVT6-Lw%3D%3D?uid=1684283561&filename=promotion.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1684283561&tknv=v2&size=937x898' alt=""/>
          <p>Лодочный мотор <br/>
            Suzuki DF9.9BRS</p>
        </div>
        <div className={cl.promotionDate}>
          <p>Акция действует до</p>
          <p>31.08.2020</p>
        </div>
      </div>
    </div>
  );
};

export default TopAdvertising;