const fs = require('fs');
const _ = require('lodash');
const project = require('./project');

module.exports = (context, event, root) => {
  const userInject = require(project.path('templateData'));

  if (!root) root = '';

  let style = fs.readFileSync(root + 'style.css').toString();
  let template = fs.readFileSync(root + 'index.html').toString();

  let compiled = _.template(template);
  let html = compiled(Object.assign({}, {style: style}, userInject(context, event)));

  return html;
}