
const chalk = require('chalk');

//import the greet module that is in the current folder
const greet = require('./greet');
const figlet = require('figlet');

 const greeting = greet('Xola');
figlet(greeting, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    //console.log(data)
   const styledMessage = chalk.bgBlue.black((data));
console.log(styledMessage)
});

figlet.text('Boo!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    //console.log(data);
    const styledMessage = chalk.bgYellow.black((data));
    console.log(styledMessage)
});

