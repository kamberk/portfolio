import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            &copy; Kambo 2021.
            <div className='credits'>
                <div className='credits-left'>
                    Credits:
                </div>
                <div className='credits-right'>
                     <a href="https://storyset.com/work">Work illustrations by Storyset</a> <br/>
                     <a href="https://iconscout.com/icon-pack/social-media-50" >Social Media  Icon Pack</a><br/>
                     <a href="https://iconscout.com/icons/international-client" >International Client Icon</a> <br/>
                     <a href="https://iconscout.com/icons/adobe-photoshop-express">Adobe Photoshop Express Icon</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
