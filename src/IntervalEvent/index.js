class IntervalEvent {
    constructor() {
        this._events = [];
        this._interval = null;
        this._running = false;
        this._index = 0;
        this._latestIndex = 0;
    };

    _findEvent(index) {
        return this._events.find((event) => event.interval === index);
    };

    addAction(interval, callback) {
        this._events.push({
            interval: this._latestIndex+interval,
            callback
        });
        this._latestIndex += interval;
    };

    start() {
        const runEvents = () => {
            let event = this._findEvent(this._index);
            if( event ) event.callback();
            console.log(this._index);
            this._index++;
        };

        runEvents();
        this._running = true;
        this._interval = setInterval(runEvents, 1000);
    };

    stop() {
        clearInterval(this._interval);
        this._running = false;
        this._index = 0;
    };

    pause() {
        clearInterval(this._interval);
        this._running = false;
    };

    resume() {
        this.start();
    };

    isRunning() {
        return this._running;
    };

    getEvents() {
        return this._events;
    };
};

module.exports = IntervalEvent;