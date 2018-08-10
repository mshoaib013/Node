const EventEmitter = require('events');
const emitter = new EventEmitter();

//reg a listener
emitter.on('test', (arg)=> {
    console.log('Listener called',arg);
})

//rais an event
emitter.emit('test',{ id:2, name:'shoaib mehedi'});