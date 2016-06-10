'use strict';

const fs = require('fs');
const path = require('path');
const doT = require('dot');
const project = require('./project');

module.exports = (context, event, root) => {
  const userInject = require(project.path('templateData'));

  if (!root) root = '';

  let style = fs.readFileSync(path.join(root, 'style.css')).toString();
  let template = fs.readFileSync(path.join(root, 'index.html')).toString();

  let compiled = doT.template(template);
  let html = compiled(Object.assign({}, {style: style}, userInject(context, event)));

  return html;
}