import React from 'react'
import Separator from '../../common/separator/index'
import './about-me.css'

function AboutMe() {
    return (
        <div>
            <Separator />
            <label className='section-title'>About Me</label>
            <div className='about-container'>
                <div className='about-info'>
                    <p>
                        My name is Kamber Kamberovic, and I am a software engineer from Sjenica, Serbia. <br/>
                    </p>
                        <div className='about-text'>
                            <div className='left-info'>
                            <div className='about-align'>
                            <img src={require('../../../assets/search.png')} alt='exploring' className='about-icon' />
                                Exploring new technologies and developing software solutions and quick hacks. <br/>
                            </div>
                            <div className='about-align'>
                            <img src={require('../../../assets/study.png')} alt='exploring' className='about-icon' />
                                Studying Computer Science at State University of Novi Pazar. <br/>
                            </div>
                            <div className='about-align'>
                            <img src={require('../../../assets/design.png')} alt='exploring' className='about-icon' />
                                Pursuing Graphic Design and Blog Writing as hobbies/side hustles. <br/>
                            </div>
                            </div>
                            <div className='right-info'>
                            <img src={require('../../../assets/coding.gif')} alt='exploring' className='coding-icon' />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
