import React from 'react';
import cl from "./ProductInfo.module.css";
import MyPicture from "../../UI/MyPicture/MyPicture";
import MyButton from "../../UI/MyButton/MyButton";

const ProductInfo = ({product}) => {
  return (
    <div className={cl.main}>
      <div className={cl.productPictureCost}>
        {product.isSale
          ?
          <div>
            <MyButton style={{padding: "13px 25px", borderRadius: '3px', fontWeight: '400', fontSize: '15px', lineHeight: '18px', letterSpacing: '0.12em'}}>SALE</MyButton>
          </div>
          : ''
        }
        <div className={cl.productPictureBlock}>
          <div className={cl.productPicture} style={{backgroundImage: `url("https://1.downloader.disk.yandex.ru/preview/7fa8f50293d2bcf29d380dc6565178bf0491f894e35b6148dd1096765e32015a/inf/6tjzYEKgjL5IQbugMvQu72x2kitF9_ne1CyL6fIMIAQgCVaigoDZxAAr3nSgpvhy4yu15czZQG_IDFc1TGBOpA%3D%3D?uid=1684283561&filename=product-2-beauteful.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1684283561&tknv=v2&size=1920x932")`}}/>
        </div>
        {/*<div style={{ width: '500px', height: '375px', backgroundImage: `url(${product.pic})`}}/>*/}
        <div className={cl.oldCost}>
          <p>{product.old_price} &#8381;</p>
        </div>
        <div className={cl.currentCost}>
          <p>{product.price} &#8381;</p>
        </div>
        <div className={cl.haveSaw}>
          <p>Нашли дешевле? Снизим цену!</p>
        </div>
      </div>
      <div className={cl.productInfo}>
        <div className={cl.productHeaderText}>
          <h2>{product.name}</h2>
          <p>Код товара: {product.product_code}</p>
        </div>
        <div className={cl.productIcons}>
          <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9.05336C12.234 7.93642 13.547 2.84138 17.382 2.84138C19.602 2.84138 22 4.38814 22 7.83071C22 11.727 18.373 16.2776 12 20.4252C5.627 16.2776 2 11.727 2 7.83071C2 4.35623 4.369 2.83939 6.577 2.83939C10.5 2.83939 11.722 7.95138 12 9.05336ZM0 7.83071C0 11.8876 3.06 17.2858 12 22.7867C20.94 17.2858 24 11.8876 24 7.83071C24 -0.109532 14.352 -1.17262 12 4.10392C9.662 -1.1437 0 -0.154409 0 7.83071Z" fill="#2F3035"/>
          </svg>
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="16" y="15.7708" width="4" height="11.7255" rx="2" fill="#2F3035"/>
            <rect x="8" y="0.527588" width="4" height="26.9687" rx="2" fill="#2F3035"/>
            <rect y="9.90796" width="4" height="17.5883" rx="2" fill="#2F3035"/>
          </svg>
          <svg width="143" height="23" viewBox="0 0 143 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M130.538 0L133.128 7.9463H141.51L134.729 12.8574L137.319 20.8037L130.538 15.8926L123.756 20.8037L126.346 12.8574L119.565 7.9463H127.947L130.538 0Z" fill="#C4C4C4"/>
            <path d="M100.288 0L102.878 7.9463H111.26L104.479 12.8574L107.069 20.8037L100.288 15.8926L93.5059 20.8037L96.0963 12.8574L89.3147 7.9463H97.6972L100.288 0Z" fill="#1C62CD"/>
            <path d="M70.1125 0L72.7028 7.9463H81.0853L74.3038 12.8574L76.8941 20.8037L70.1125 15.8926L63.3309 20.8037L65.9213 12.8574L59.1397 7.9463H67.5222L70.1125 0Z" fill="#1C62CD"/>
            <path d="M41.7125 0L44.3028 7.9463H52.6853L45.9037 12.8574L48.4941 20.8037L41.7125 15.8926L34.9309 20.8037L37.5212 12.8574L30.7397 7.9463H39.1222L41.7125 0Z" fill="#1C62CD"/>
            <path d="M11.5375 0L14.1278 7.9463H22.5103L15.7287 12.8574L18.3191 20.8037L11.5375 15.8926L4.75593 20.8037L7.34626 12.8574L0.564686 7.9463H8.94717L11.5375 0Z" fill="#1C62CD"/>
          </svg>
        </div>
        <div className={cl.productInfoMenu}>
          <p>Характеристики</p>
          <p>Наличие в магазине</p>
        </div>
        <div className={cl.productTopicInfo}>
          <div className={cl.productTopicInfoItem}>
            <p>Производитель</p>
            <p>{product.manufacturer}</p>
          </div>
          <div className={cl.productTopicInfoItem}>
            <p>Количество мест, шт:</p>
            <p>{product.number_of_seats}</p>
          </div>
          <div className={cl.productTopicInfoItem}>
            <p>Мощность, л.с.</p>
            <p>{product.power}</p>
          </div>
          <div className={cl.productTopicInfoItem}>
            <p>Тип двигателя</p>
            <p>{product.engine_type}</p>
          </div>
          <div className={cl.productTopicInfoItem}>
            <p>Год выпуска</p>
            <p>{product.year_release}</p>
          </div>
          <div className={cl.productTopicInfoShowMore}>
            <p>Показать еще</p>
          </div>
        </div>
        <div className={cl.myBtnW}>
          <MyButton style={{padding: '16px 53px', fontWeight: "400", fontSize: "14px", lineHeight: "17px",
            textAlign: "center", letterSpacing: "0.12em", textTransform: "uppercase", borderRadius: '3px'}}>купить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;