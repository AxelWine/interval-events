# IntervalEvent
**IntervalEvent** is an NPM module that provides a simple way to execute events at specific time intervals. It allows you to set up actions to be executed at predetermined moments and control the start, pause, resume, and stop of the event sequence.

## Installation
To use **IntervalEvent**, you need to install the module using npm:
```bash
npm install interval-event
```

## Usage
First, import the **IntervalEvent** module into your project:
```js
const IntervalEvent = require("interval-event");
```

Next, create an instance of **IntervalEvent**:
```js
const event = new IntervalEvent();
```

## Adding actions
You can add actions to the event sequence using the `addAction(seconds, callback)` method. The seconds parameter indicates the number of seconds to wait before executing the action, and `callback` is a function that will be called at that time.

Here's an example of how to add some actions:
```js
event.addAction(5, () => {
  console.log("Action in 5 seconds");
});

event.addAction(5, () => {
  console.log("Action in 10 seconds");
});

event.addAction(10, () => {
  console.log("Action in 20 seconds");
});
```

In this example, three actions have been added. The first one will be executed after 5 seconds from the start, the second one after 10 seconds (5 seconds after the first action), and the third one after 20 seconds from the start (10 seconds after the second action).

## Starting and stopping the event sequence
To start the event sequence, use the `start()` method:
```js
event.start();
```
This will initiate the execution of the actions at the specified time intervals.

If you want to stop the event sequence at any time, you can call the `stop()` method:

```js
event.stop();
```
This will stop the execution of the actions and reset the event index to zero.

## Pausing and resuming the event sequence
If you need to temporarily pause the event sequence, you can call the `pause()` method. This will stop the execution of the actions but maintain the current index, which means that when the sequence is resumed, it will continue from where it left off.
```js
event.pause();
```
To resume the event sequence after pausing, use the `resume()` method. This will initiate the execution of the actions from the point where they were stopped.

```js
event.resume();
```

## Checking if the sequence is running
If you need to check if the event sequence is running, you can call the `isRunning()` method. This method returns true if the sequence is running and false otherwise.

```js
const running = event.isRunning();
console.log("The sequence is running:", running);
```

## Getting Information about the events
If you want to retrieve information about the scheduled events, you can call the `getEvents()` method. This will return an array with all the configured events, including the interval and the associated callback function.

```js
const events = event.getEvents();
console.log("Configured events:", events);
```

## Example
Here's a complete example of how to use **IntervalEvent**:

```js
const IntervalEvent = require("interval-event");

const event = new IntervalEvent();

event.addAction(5, () => {
  console.log("Action in 5 seconds");
});

event.addAction(5, () => {
  console.log("Action in 10 seconds");
});

event.addAction(10, () => {
  console.log("Action in 20 seconds");
});

event.start();
```

In this example, an instance of IntervalEvent is created and three actions are added. Then, the event sequence is started, and the corresponding messages will be printed at the specified time intervals.

## License
This project is licensed under the **MIT License**. See the [LICENSE](https://github.com/AxelWine/interval-events/blob/main/README.md).