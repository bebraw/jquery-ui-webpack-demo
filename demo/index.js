import 'purecss';
import 'highlight.js/styles/github.css';
import 'react-ghfork/gh-fork-ribbon.css';
import './main.css';
import '../style.css';

import React from 'react';
import App from './app.jsx';

import {form} from 'jquery-ui';

// prints out ok! you could use form now
console.log('form', form);

main();

function main() {
  var app = document.createElement('div');
  document.body.appendChild(app);

  React.render(<App />, app);
}
