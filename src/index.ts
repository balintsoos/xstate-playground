import { interpret } from "xstate";
import * as machines from "./machines";

const toggleService = interpret(machines.toggleMachine)
  .onTransition((state) => console.log(state.value))
  .start();

toggleService.send("TOGGLE");
toggleService.send("TOGGLE");

const timeOfDayService = interpret(
  machines.timeOfDayMachine.withContext({ time: Date.now() })
)
  .onTransition((state) => console.log(state.value))
  .start();
