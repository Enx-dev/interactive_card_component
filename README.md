# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![](/public//images/download.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [mantine](https://mantine.dev) - React framework

### What I learned

I enjoy learning new Franworks or libary by building new Components , so i used this to learn Mantine Component library

```js
export function cc_format(value: string) {
  if (value.match(/\d/)) {
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .slice(0, 16);
    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.slice(i, i + 4));
    }

    return parts.length > 1 ? parts.join(" ") : value;
  }
}
```

### Continued development

This Component will be intergrated into a fullstack app at a later date

### Useful resources

- [Mantine](https://www.mantine.dev) - Light weight Component libary .

## Author

- Website - [Add your name here](https://portfollio-one.vercel.app/)
- Frontend Mentor - [@Enx_dev](https://www.frontendmentor.io/profile/Enx_dev)
- Twitter - [@enx_dev](https://www.twitter.com/enx_dev)
