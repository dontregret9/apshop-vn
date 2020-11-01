import React from 'react';
import './Advert.css';
function Advert(props) {
    if (props.position === 'left') 
    {
        return (
            <div className="advert_left">
                <a href={props.href}><img src={props.img_link}/></a>
            </div>
        );
    }
    else if(props.position === 'right')
    {
        return (
            <div className="advert_right">
                <a href={props.href}><img src={props.img_link}/></a>
            </div>
        );
    }
    else
    {
        return null;
    }

}
export default Advert;