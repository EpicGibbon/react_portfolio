import React from 'react';
import Hero from '../Components/Hero';
import Content from '../Components/Content';

function About(props) {

    return (
        <div>
            <Hero title={props.title}/>

            <Content>
            <p>My name is Anthony Aguiar I'm currently 23 years old living in Orlando, FL. My background started out in sales and operations and has slowly progressed into web development. In my free time I like to play video games, play basketball, watch movies, hangout with friends, and be outside in nature!
            </p>

            <p>My most recent adventure was moving up to Louisville, KY for a year and running a branch for a international moving company at the age of 21. I have faced challenges all my life and coding with be another challenge that I can say I have tackled. I look forward to the future!
            </p>

            <p>I have recently started attending the University Of Central Florida's Coding Bootcamp. Since being enrolled in the Bootcamp I have gained experience in numerous frameworks and technologies such as: HTML, CSS, JavaScript, Node.js, Bootstrap, Materalize, Etc. With these new found skillsets, my passions, and with my previous experiences in team development and self-reliance I am excited to see where being a web developer takes me. I am always interested in learning new technologies and I am planning down the road to venture into UX design and even iOS development.
            </p>
            </Content>
        </div>
    )
}


export default About;