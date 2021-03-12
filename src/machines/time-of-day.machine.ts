import { Machine } from "xstate";

export const timeOfDayMachine = Machine(
  {
    id: "timeOfDay",
    initial: "unknown",
    context: {
      time: Date.now(),
    },
    states: {
      unknown: {
        always: [
          {
            target: "morning",
            cond: "isBeforeNoon",
          },
          {
            target: "afternoon",
            cond: "isBeforeSix",
          },
          { target: "evening" },
        ],
      },
      morning: {},
      afternoon: {},
      evening: {},
    },
  },
  {
    guards: {
      isBeforeNoon: (context) => true, // implementation details missing
      isBeforeSix: (context) => false, // implementation details missing
    },
  }
);
