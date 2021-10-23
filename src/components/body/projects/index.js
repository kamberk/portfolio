import React, { useEffect } from 'react'
import './projects.css'
import {ProjectData} from '../../data/projects'
import ProjectCard from './project-card';
import Separator from '../../common/separator/index';
import Aos from 'aos'
import "aos/dist/aos.css"

function Projects() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    const data = ProjectData;
    return (
        <div className='projects' data-aos="zoom-in-up">
            <Separator />
            <label className='section-title'>Projects</label>
            <div>
                {data.map((project)=> {
                    return (
                        <ProjectCard key={project.id.toString()} project={project} />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
