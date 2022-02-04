import React from 'react';
import { NavLink } from 'react-router-dom';

export interface FooterProps {
  copyright: string;
  footerNavLinks: Array<{ path: string; text: string }>;
}
const Footer = ({ copyright, footerNavLinks }: FooterProps): JSX.Element => {
  return (
    <footer>
      <p>{copyright}</p>
      {footerNavLinks.map((link) => (
        <NavLink key={link.path} to={link.path}>
          {link.text}
        </NavLink>
      ))}
    </footer>
  );
};

export default Footer;
