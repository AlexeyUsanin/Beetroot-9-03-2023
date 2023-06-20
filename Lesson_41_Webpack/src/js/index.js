import { renderButton } from './button';

const title = document.createElement('h1');
title.innerText = 'Hello Webpack';

document.body.append(title);

renderButton();

console.log('Hi');