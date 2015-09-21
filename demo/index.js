import 'purecss';
import 'highlight.js/styles/github.css';
import 'react-ghfork/gh-fork-ribbon.css';
import './main.css';
import '../style.css';

import React from 'react';
import App from './app.jsx';

// import through root
//import {form} from 'jquery-ui';

// import a specific part
import jquery from 'jquery';
import dialog from 'jquery-ui/ui/widgets/dialog';

// prints out ok! you could use form now
console.log('dialog', dialog, Object.keys(dialog), Object.keys(jquery).dialog);

main();

function main() {
  var app = document.createElement('div');
  document.body.appendChild(app);

  React.render(<App />, app);
}
