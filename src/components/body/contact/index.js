import React from 'react'
import './contact.css'
import Separator from '../../common/separator/index'
import SocialContact from '../../common/social-content/index'
import Form from './form'
function Contact() {
    return (
        <div className='contact'>
            <Separator />
            <label className='section-title'>Contact</label>
            <div className='contact-container'>
                <div className='container-left'>
                    <p>Want to get in touch? Contact me on any of the platform</p>
                    <SocialContact />
                </div>
                <div className='download'>
                    <a download href={require('../../../assets/CV.pdf').default}>
                        <i className="fi fi-rr-cloud-download download-icon"></i>
                        Download Resume
                        </a>
                </div>
            </div>
            <Form />
        </div>
    )
}

export default Contact
