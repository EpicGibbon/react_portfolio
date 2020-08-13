import React from 'react';

import CardInfo from '../Components/Cardinfo'

function Card(props) {
    return (
        <div className="d-inline-block a-card" onClick={(e) => props.click(props.display)}>
            <img className="a-card-image" src={props.display.imgSrc} alt={props.display.imgSrc} />
            {props.display.selected && <CardInfo title={props.display.title} subTitle={props.display.subTitle} link={props.display.link} />}
        </div>
    )
}

export default Card;