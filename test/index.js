const IntervalEvent = require("../src/IntervalEvent");
const event1 = new IntervalEvent();
const event2 = new IntervalEvent();

event1.addAction(5, () => {
    console.log("Evento 1: Acción dentro de 5 segundos");
});

event1.addAction(5, () => {
    console.log("Evento 1: Acción dentro de 10 segundos");
});

event1.addAction(10, () => {
    console.log("Evento 1: Acción dentro de 20 segundos");

    event1.stop();
});

event2.addAction(5, () => {
    console.log("Evento 2: Acción dentro de 5 segundos");
});

event2.addAction(5, () => {
    console.log("Evento 2: Acción dentro de 10 segundos");
});

event2.addAction(10, () => {
    console.log("Evento 2: Acción dentro de 20 segundos");

    event2.stop();
});

event1.start();
event2.start(15);