const IntervalEvent = require("../src/IntervalEvent");
const event = new IntervalEvent();

event.addAction(5, () => {
    console.log("Acción dentro de 5 segundos");
});

event.addAction(5, () => {
    console.log("Acción dentro de 10 segundos");
});

event.addAction(10, () => {
    console.log("Acción dentro de 20 segundos");
});

event.start();