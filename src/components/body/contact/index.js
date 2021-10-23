import React from 'react'
import './contact.css'
import Separator from '../../common/separator/index'
import SocialContact from '../../common/social-content/index'
import emailjs from 'emailjs-com';
import './form.scss';

function Contact() {

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
        emailjs.sendForm('service_7ceb0hs', 'template_mr1sac3', e.target, 'user_YMHhqOrre2gThea8XTfB2')
          .then((result) => {
              console.log(result)
          }, (error) => {
              console.log(error)
          });
      }
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
                    <a download href="https://github.com/kamberk/portfolio/raw/master/src/assets/CV.pdf">
                        <i className="fi fi-rr-cloud-download download-icon"></i>
                        Download Resume
                        </a>
                </div>
            </div>
            <form className="cf" onSubmit={sendEmail}>
                <div className='half left cf'>
                    <input type="text" name="from_name" placeholder='Name'/>
                    <input type="email" name="from_email" placeholder='Email' />
                </div>
                <div className='half right cf'>
                    <textarea name="message" placeholder='Message' />
                </div>
                    <input type="submit" value="Send" className='send'/>
            </form>
        </div>
    )
}

export default Contact
