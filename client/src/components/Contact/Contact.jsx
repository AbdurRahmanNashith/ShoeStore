import React from 'react'
import "./Contact.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';


const Contact = () => {
    return (
        <div className='Contact'>
            <div className="wrapper">
                <span> BE IN TOUCH WITH US:</span>
                <div className="mail">
                    <input type="text" placeholder='Enter your e-mail...' />
                    <button>JOIN US</button>
                </div>
                <div className="icons">
                    <FacebookIcon />
                    <InstagramIcon />
                    <WhatsAppIcon />
                    <PinterestIcon />
                </div>
            </div>
        </div>
    )
}

export default Contact
