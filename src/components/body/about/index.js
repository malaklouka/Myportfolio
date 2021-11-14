import React from 'react';
import SocialContact from '../../commmon/social';
import './about.css';

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello There 👋 , I am
                    <br /> <span className="info-name">Nakaa Malak</span>.
                    <br /> A FullStack Web and mobile Developper.
                    <br />
                    <br /> Software Engineer, having made a retraining in FullStack JS Web Developer.
                    <br /> Highly motivated and responsible, in order to participate in new challenges,
                    <br /> I am sure that my experience will be useful. 
                    <br /> A great use.
                </div>
                <div className="about-photo">
                    <img src={require('../../../img/img.jpg').default}
                    className="picture"
                    alt=""
                    />
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About;