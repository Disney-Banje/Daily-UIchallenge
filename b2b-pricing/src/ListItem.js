import React from "react";
import './ListItem.css';

function ListItem({ icon, text, isComingSoon }) {
    return (
        <li className="item_content">
            <ion-icon name={icon} className='checkbox-icon'></ion-icon>
            {text}
            {isComingSoon && <span className="coming-soon">(comming soon)</span>}
        </li>
    );
}

export default ListItem;