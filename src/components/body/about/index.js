import React from 'react'
import SocialContact from '../../common/social-content'
import './about.css'

function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    Hello There, I am <br /> <span className='info-name'>Kamber.</span> <br /> I love creating web applications.
                </div>
                <div className='about-photo'>
                    <img src={require('../../../assets/coding.png').default} className='picture' alt='coding'/>
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

//<a href="https://storyset.com/work">Work illustrations by Storyset</a>
//<a href="https://iconscout.com/icon-pack/social-media-50" target="_blank">Social Media  Icon Pack</a> by <a href="https://iconscout.com/contributors/pixel-icons" target="_blank">Pixel Icons</a>

export default About
