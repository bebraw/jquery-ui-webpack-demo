import 'purecss';
import 'highlight.js/styles/github.css';
import 'react-ghfork/gh-fork-ribbon.css';
import './main.css';
import '../style.css';

import React from 'react';
import App from './app.jsx';

// import through root
import {form} from 'jquery-ui';

// import a specific part
import labels from 'jquery-ui/ui/labels';

// prints out ok! you could use form now
console.log('form', form, 'labels', labels);

main();

function main() {
  var app = document.createElement('div');
  document.body.appendChild(app);

  React.render(<App />, app);
}
