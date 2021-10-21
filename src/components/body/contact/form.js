import React from 'react'
import emailjs from 'emailjs-com';
import './form.scss';

export default function Form() {

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
      
    );
  }
