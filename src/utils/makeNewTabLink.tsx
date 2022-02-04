import React from 'react';
export function makeNewTabLink(href: string, text: string): JSX.Element {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}
