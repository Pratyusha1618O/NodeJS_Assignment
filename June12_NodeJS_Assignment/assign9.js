// While working with the events module, one interesting observation is that when an event is created and
// called, the associated event handler is triggered1 However, what happens if we remove an event and then
// try to call it? In this coding challenge letes create an event handler and call it1 Later letes remove the event
// handler and observe what happens when we call it

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMSG = (channelName)=>{
    console.log(`Thanks for subscribing to ${channelName}`);
};

eventEmitter.addListener("Subscribe", subscribeMSG);

console.log("Calling event listner before removing the event.");
eventEmitter.emit("subscribe", "College Wallah");

console.log("Calling event listner after removing the event.");
eventEmitter.removeListener("Subscribe", subscribeMSG);

eventEmitter.emit("Subscribe", "College Wallah");


