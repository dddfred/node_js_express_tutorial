const EventEmitter =  require('events'); //gets back a class (notice capitalization of variable)

//if we want to create something custom, we need to extend the class
//if we simply want to emit and event and listen for it, we can create an instance.

const customEmitter = new EventEmitter();

/**
 * on - listen for an event
 * emit - emit an event
 * 
 * on -  takes in one parameter, which is a string with the name of the event
 * on - we can also have a callback function as a parameter that will let us do something when this event happens,
 * in other words, react to this event
 * emit - takes on a string with the SAME name as our listener, this way we tell the listener to what emmitter to
 * react
 */

//listener
customEmitter.on('response', (name, id) =>{
     console.log(`data received: ${name}, ${id}`);
});
customEmitter.on('response', () =>{
     console.log(`some other logic here`);
});

//emitter                      //arguments
customEmitter.emit('response', 'john', 34)

/**Summary
 * 
 * We create an instance from the class that we get from the events module
 * We have two methods, the on() method which reacts to an emmiter when it emits
 * And the emit() method that initiates the emit. 
 * strings on both methods need to be the same to link them to one another
 * 
 * NOTE: 
 * 1. we can have as many functions as we want as listeners and do some other logic when they get triggered
 * 2. The order matters, we need to declare a listener before we declare and emitter, this way when the emitter
 * get triggered, the listener will already be listening 
 * 3. We can pass in arguments when we trigger the emit function
 */

//For another example of events, look at 3.6_event_emitter.js