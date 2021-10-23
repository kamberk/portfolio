import React, { useEffect } from 'react'
import './body.css'
import About from './about/index'
import Projects from './projects/index'
import Skills from './skills/index'
import Work from './work/index'
import Contact from './contact/index'
import AboutMe from './about-me'
import Aos from 'aos'
import "aos/dist/aos.css"

function Body() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <div className='body'>
            <section data-aos="zoom-in-down" id='about'>
                <About />
            </section>
            <section data-aos="zoom-in-down" id='about-me'>
                <AboutMe />
            </section>
            <section id='projects'>
                <Projects />
            </section>
            <section id='skills'>
                <Skills />
            </section>
            <section id='work'>
                <Work />
            </section>
            <section data-aos="zoom-in-down" id='contact'>
                <Contact />
            </section>
        </div>
    )
}

export default Body
