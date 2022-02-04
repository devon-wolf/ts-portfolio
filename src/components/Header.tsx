import React from 'react';
import { NavLink } from 'react-router-dom';

export interface HeaderProps {
  headerTitle: string;
  headerNavLinks: Array<{ path: string; text: string }>;
}
const Header = ({ headerTitle, headerNavLinks }: HeaderProps) => {
  return (
    <header>
      <h1>{headerTitle}</h1>
      <nav>
        {headerNavLinks.map((link) => (
          <NavLink key={link.path} to={link.path}>
            {link.text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
