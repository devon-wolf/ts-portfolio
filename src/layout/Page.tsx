import React from 'react';

export interface PageProps {
  title: string;
  children?: JSX.Element | JSX.Element[];
}

const Page = ({ title, children }: PageProps) => {
  return (
    <main>
      <h2>{title}</h2>
      {children}
    </main>
  );
};

export default Page;
