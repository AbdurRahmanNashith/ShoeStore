import React from 'react';
import './Contact.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  const socialMediaProfiles = [
    {
      name: 'Facebook',
      icon: <FacebookIcon />,
      url: 'https://www.facebook.com/abdur.nashith.37'
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon />,
      url: 'https://www.instagram.com/abdur.7739/'
    },
    {
        name: 'LinkedIn',
        icon: <LinkedInIcon />,
        url: 'https://www.linkedin.com/in/abdur-rahman-nashith-b74306205/'
      },
      {
        name: 'GitHub',
        icon: <GitHubIcon />,
        url: 'https://github.com/abdur7739'
      }
  ];

  return (
    <div className='Contact'>
      <div className='wrapper'>
        <span>BE IN TOUCH WITH US:</span>
        <div className='mail'>
          <input type='text' placeholder='Enter your e-mail...' />
          <button>JOIN US</button>
        </div>
        <div className='icons'>
          {socialMediaProfiles.map((profile) => (
            <a key={profile.name} href={profile.url}>
              {profile.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
