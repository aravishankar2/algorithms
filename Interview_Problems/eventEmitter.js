// Build an Event Emitter with publish and subscribe methods

/* 
    The class should have an "On" method 
    that takes an 'eventName', and a 'callbackFn',
    and should save the 'callbackFn' to be called 
    when the event with 'eventName' is emitted. 
*/

/* 
    The class should have an "Emit" method 
    that takes an 'eventName' and a 'data' object, 
    and it should call the 'callbackFn' associated
    with that event and pass the data object into them.
*/

/* 
    The class should have an "RemoveListener" method
    that takes 'eventName' and 'callbackFn',
    should remove that 'callbackFn' from the event.
*/

class EventEmitter {
  // Let's use an obj to keep track of our events
  constructor() {
    this.events = {};
  }

  /* 
    since we have an events object,
    we can use the event name string 
    as our key, and the value is going 
    to be an array of our callback functions.
  */
  On(eventName, callbackFn) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callbackFn);
  }

  /* 
    We want to check if we have any functions
    associated with the event. If we don't, or the event
    doesn't have any functions in its array, we log a message
    and return. Otherwise, we map through our array of functions
    and pass in our data object.
  */
  Emit(eventName, data) {
    if (!this.events[eventName]) {
      console.log("event doesn't exist.");
      return;
    }
    if (this.events[eventName].length === 0) {
      console.log("can not fire event.");
      return;
    }
    this.events[eventName].map((callbackFn) => callbackFn(data));
  }
  /* 
    We need to remove a specific callback from our array of functions
    if it exists in there. Our RemoveListener function takes in an eventName,
    and a callback function. We need to find the index at which this array exists in 
    the array, and we can use the Javascript .splice method to cut that 1 function out of the array. 
  */
  RemoveListener(eventName, callbackFn) {
    const i = this.events[eventName].indexOf(callbackFn);
    if (i === -1) {
      console.log(
        "function you're trying to remove doesn't exist for this event."
      );
      return;
    }
    // cut out our 1 function at the specified index for that event
    this.events[eventName].splice(i, 1);
  }
}

const iLove = (eventData) => {
  console.log(`I love ${eventData.food}. The end.`);
};

const iAm = (eventData) => {
  console.log(`I am ${eventData.food}. My body is made of it.`);
};

const iHate = (eventData) => {
  console.log(`I hate ${eventData.food}. It's trash.`);
};

const emitter = new EventEmitter();

console.log("our events object, initially.", emitter.events);

console.log("We add two functions to the same event.");
emitter.On("love", iLove);
emitter.On("love", iAm);
emitter.On("hate", iHate);

console.log("our events object, after adding events.", emitter.events);

console.log("We call whatever functions exist on our event");
emitter.Emit("love", { food: "pizza" });
emitter.Emit("love", { food: "chicken" });

emitter.RemoveListener("love", iAm);
console.log("our events object, after removing a specific.", emitter.events);
