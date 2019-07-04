const chalk = require('chalk');
const format = require('util').format;

const sep = chalk.blue('·');

exports.log = function(...args) {
  const msg = format.apply(format, args);
  console.log(sep, msg);
};

exports.warning = function(...args) {
  if (args[0] instanceof Error) args[0] = args[0].message.trim();
  const msg = format.apply(format, args);
  console.log(chalk.bgYellow('error'), sep, msg);
};

exports.error = function(...args) {
  if (args[0] instanceof Error) args[0] = args[0].message.trim();
  const msg = format.apply(format, args);
  console.error(chalk.bgRed('error'), sep, msg);
  process.exit(1);
};

exports.success = function(...args) {
  const msg = format.apply(format, args);
  console.log(chalk.bgGreen('success'), sep, msg);
};
