const pkg = require('../package.json');
require('child_process').exec("create-react-readme ./package.json ./src/lib/components/ ./readme.md -t ./template.handlebars -s ./setup_readme.md -u ./usage_readme.md -d ./dev_readme.md");
