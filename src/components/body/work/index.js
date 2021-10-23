import React, { useEffect } from 'react'
import './work.css'
import Separator from '../../common/separator/index'
import { WorkData } from '../../data/work'
import WorkCard from './work-card';
import Aos from 'aos'
import "aos/dist/aos.css"

function Work() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    const data = WorkData;
    return (
        <div className='work' data-aos="zoom-in-down">
            <Separator />
            <label className='section-title'>Work</label>
            <div className='work-list'>
                {data.map((item) => {
                    return (
                        <WorkCard key={item.company.toString()} item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default Work
