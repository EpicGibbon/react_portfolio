import React from 'react';
import { useSpring, animated } from 'react-spring';


function CardInfo(props) {
    //this variable will hold the react spring styling
    const style = useSpring({ opacity: 1, from: { opacity: 0 } })

    return (
        <animated.div className="a-card-info" style={style}>
            <p className="a-card-title">{props.title}</p>
            <p className="a-card-subtitle">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>

        </animated.div>
    )
}

export default CardInfo;