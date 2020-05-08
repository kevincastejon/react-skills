const pkg = require('../package.json');
require('child_process').exec("react-doc-generator ./src/lib/components/ -o ./readme.md -s ./setup_readme.md -u ./usage_readme.md -d ./dev_readme.md -t "+pkg.name);
