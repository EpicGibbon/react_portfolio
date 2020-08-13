import React from 'react';
import Card from '../Components/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import placeholder from '../assets/images/placeholder.png'


// import images that will be used on homepage here then link to src dim (1000px wide, 1600px tall)

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displays: [
                {
                    id: 0,
                    title: "Enter title",
                    subTitle: "Enter Subheading",
                    imgSrc: placeholder,
                    link: "https://github.com/EpicGibbon?tab=repositories",
                    selected: false
                },
                {
                    id: 1,
                    title: "Enter title",
                    subTitle: "Enter Subheading",
                    imgSrc: placeholder,
                    link: "https://github.com/EpicGibbon?tab=repositories",
                    selected: false
                },
                {
                    id: 2,
                    title: "Enter title",
                    subTitle: "Enter Subheading",
                    imgSrc: placeholder,
                    link: "https://github.com/EpicGibbon?tab=repositories",
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