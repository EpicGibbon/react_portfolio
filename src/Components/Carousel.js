import React from 'react';
import Card from '../Components/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import xfiles from '../assets/images/xfiles.jpg'
import pbudget from '../assets/images/pbudget.png'
import workout from '../assets/images/workout.png'

// import images that will be used on homepage here then link to src dim (1000px wide, 1600px tall)

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displays: [
                {
                    id: 0,
                    title: "X-Files",
                    subTitle: "X-Files is an satirical App that allows a user to search for recorded UFO Sightings.",
                    imgSrc: xfiles,
                    link: "https://murmuring-reef-63999.herokuapp.com/",
                    selected: false
                },
                {
                    id: 1,
                    title: "Progressive Budget",
                    subTitle: "This application allows users whether theyre online or offline post a budget, then add and subtract expenses based on their budget.",
                    imgSrc: pbudget,
                    link: "https://fathomless-brushlands-97257.herokuapp.com/",
                    selected: false
                },
                {
                    id: 2,
                    title: "Fitness Tracker",
                    subTitle: "This is an application that will give users the ability to view, create, and track daily exercise regiments.",
                    imgSrc: workout,
                    link: "https://radiant-shelf-78860.herokuapp.com/?id=5f296807876fe300186a8aaf",
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let displays = [...this.state.displays];

        displays[id].selected = displays[id].selected ? false : true;

        displays.forEach(display => {
            if(display.id !== id) {
                display.selected = false;
            }
        });

        this.setState({
            displays
        });
    }



    makeDisplays = (displays) => {
        return displays.map(display =>{
            return <Card display={display} click={(e => this.handleCardClick(display.id, e))} key={display.id}/>
        })
    }


    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeDisplays(this.state.displays)}
                </Row>
            </Container>
        )
    }

}

export default Carousel;