import React from 'react'
import { SocialData } from '../../data/social'
import './social-content.css'

function SocialContact() {
    const data = SocialData;
    return (
        <div className='social-contact'>
            {data.map((item)=> {
                return (
                    <a key={item.platform.toString()} href={item.link}>
                        <div className='social-icon-div'>
                            <img src={item.icon} className='social-icon' alt='social' />
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default SocialContact
