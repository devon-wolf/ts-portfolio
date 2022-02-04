/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { makeNewTabLink } from '../utils/makeNewTabLink';

export const BIO = (
    <>
      <p>
        I'm Devon. I'm a software engineer, a creative writer and editor, and a
        lover of things whimsical and strange.
      </p>
      <p>
        I am perpetually curious, and I work best when I can experiment and learn
        something new.
      </p>
      <p>
        My technical background is primarily in web application development
        (TypeScript/JavaScript), but I'm always looking to stretch my knowledge
        and am comfortable with a variety of languages and approaches. Take a peek
        at the resume tab if you want to know more.
      </p>
      <br />
      <p>
        To see what I've been tinkering with lately, visit my profile on{' '}
        {makeNewTabLink('https://github.com/devon-wolf', 'GitHub')}.
      </p>
    </>
  );