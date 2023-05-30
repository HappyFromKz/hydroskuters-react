import React from 'react';
import {useNavigate} from 'react-router-dom';
import './ModelMenu.css'

const ModelMenu = ({items, isActive, setIsActive}) => {
    const navigate = useNavigate();

    return (
        <div className={isActive ? 'menu active' : 'menu'}>
            <div className={'menuContent'} onClick={() => {setIsActive(false)}}>

                {items.map(item =>
                    <div className={'menuContentItem'} key={item.id}>
                        <div className={'menuContentItemIcon'}>
                            <i className={`pi ${item.icon}`} style={{ fontSize: '1.5rem' }}></i>
                        </div>
                        <button onClick={() => {navigate(item.path)}}>{item.name}</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModelMenu;