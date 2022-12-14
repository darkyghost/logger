const chalk = require('chalk');
class logger {
    warn(text, pjson) {
        let currentdate = new Date().toLocaleString('en-US', {timeZone: 'Europe/Kiev'}).replace(/T/, ' ').replace(/\..+/, '');
        console.log(`${chalk.blue(currentdate)} | ${chalk.bgYellow('[WARN]')}: ${text}`);
    }
    log(text, pjson) {
        let currentdate = new Date().toLocaleString('en-US', {timeZone: 'Europe/Kiev'}).replace(/T/, ' ').replace(/\..+/, '');
        console.log(`${chalk.blue(currentdate)} | ${chalk.bgMagenta('[LOG]')}: ${text}`);
    }
    sys(text, pjson) {
        let currentdate = new Date().toLocaleString('en-US', {timeZone: 'Europe/Kiev'}).replace(/T/, ' ').replace(/\..+/, '');
        console.log(`${chalk.blue(currentdate)} | ${chalk.inverse('[SYSTEM]')}: ${text}`);
    }
    error(text, pjson) {
        let currentdate = new Date().toLocaleString('en-US', {timeZone: 'Europe/Kiev'}).replace(/T/, ' ').replace(/\..+/, '');
        console.log(`${chalk.blue(currentdate)} | ${chalk.bgRed('[ERROR]')}: ${text}`);
    }
    start(text, pjson) {
        let currentdate = new Date().toLocaleString('en-US', {timeZone: 'Europe/Kiev'}).replace(/T/, ' ').replace(/\..+/, '');
        console.log(`${chalk.blue(currentdate)} | ${chalk.bgMagenta(`[${pjson.name}]`)}: ${text}`);
    }
    request(text, pjson) {
        let currentdate = new Date().toLocaleString('en-US', {timeZone: 'Europe/Kiev'}).replace(/T/, ' ').replace(/\..+/, '');
        console.log(`${chalk.blue(currentdate)} | ${chalk.green(`[REQUEST]`)}: ${text}`);
    }
}


module.exports = logger;