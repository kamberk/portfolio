import React, { useEffect } from 'react'
import './skills.css'
import Separator from '../../common/separator/index'
import { SkillsData } from '../../data/skills'
import SkillCard from './skill-card';
import Aos from 'aos'
import "aos/dist/aos.css"

function Skills() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    const data = SkillsData;
    return (
        <div className='skills' data-aos="zoom-in-down">
            <Separator />     
            <label className='section-title'>My Skills</label>
            <div className='skills-container'>
                {data.map((item)=> {
                    return(
                        <div key={item.type.toString()} className='skills-section'>
                            <label key={item.type.toString()} className='skills-section-title'>{item.type}</label>
                            <div className='skills-list'>
                                {item.list.map((skill) => {
                                    return(
                                        <SkillCard key={skill.name.toString()} skill={skill}/>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>      
        </div>
    )
}

export default Skills
