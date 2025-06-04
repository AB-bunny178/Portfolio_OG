import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/AB-bunny178' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://hashnode.com/@BunnyAB' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode />
            </a>

            <a href='https://dev.to/abunny' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev />
            </a>

            <a href='https://www.linkedin.com/in/pramodkumar-athkuri-4466382ab/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.facebook.com/bunny.pramod.31' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='https://x.com/TheBunny178' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
