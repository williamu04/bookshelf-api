const { EventEmitter } = require('events');

const birthday = (name) => {
    console.log(`Happy happy happy ${name}!`);
}

const myEmitter = new  EventEmitter();

myEmitter.on('lahir!', birthday);

myEmitter.emit('lahir!', 'cella');