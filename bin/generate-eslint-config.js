const fs = require('fs');
const path = require('path');

const { configs } = require('../index');

const configFile = path.join(__dirname, '..', '.eslintrc.json');
const content = JSON.stringify(configs.recommended, null, 2);

// eslint-disable-next-line security/detect-non-literal-fs-filename
fs.writeFileSync(configFile, content, { encoding: 'utf8' });
