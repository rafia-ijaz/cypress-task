const fs = require('fs');
module.exports = (on, config) => {
  on('task', {
    readAlertText() {
      return fs.readFileSync('alert-text.txt', 'utf8');
    }
  });
};
