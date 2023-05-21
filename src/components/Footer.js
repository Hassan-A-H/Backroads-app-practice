import React from 'react';
import { pageLinks, socialLinks } from './data';
import PageLink from './PageLink';
import SocialLink from './SocialLink';

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map((link) => {
          return <PageLink {...link} key={link.id} itemClass='footer-link' />;
        })}
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} itemClass='footer-link' {...link} />;
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
