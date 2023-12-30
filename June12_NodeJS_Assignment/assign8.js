// F0 Let's simulate a subscription feature similar to YouTube1 Using the events module, we'll create a custom
// event named "subscribe"1 When this event is triggered, it should display a message in the console indicating
// that the user has subscribed1

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMSG = (channelName)=>{
    console.log(`Thanks for subscribing to ${channelName}`);
};

eventEmitter.addListener("Subscribe", subscribeMSG);

eventEmitter.emit("Subscribe", "College Wallah");


