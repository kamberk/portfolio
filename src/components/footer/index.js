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
            <a href="https://iconscout.com/icon-pack/social-media-50" >Social Media  Icon Pack</a> by <a href="https://iconscout.com/contributors/pixel-icons" >Pixel Icons</a> <br/>
            <a href="https://iconscout.com/icons/international-client" >International Client Icon</a> by <a href="https://iconscout.com/contributors/jemismali">Jemis Mali</a> on <a href="https://iconscout.com">Iconscout</a>
            <a href="https://iconscout.com/icons/adobe-photoshop-express">Adobe Photoshop Express Icon</a> by <a href="https://iconscout.com/contributors/negative-design">Mani_prasanth</a> on <a href="https://iconscout.com">Iconscout</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
