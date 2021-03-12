import { Machine } from "xstate";

export const wizardMachine = Machine({
  id: "wizard",
  initial: "opened",
  states: {
    opened: {
      initial: "step1",
      states: {
        step1: {
          on: {
            NEXT: "step2",
          },
        },
        step2: {
          on: {
            NEXT: "step3",
            BACK: "step1",
          },
        },
        step3: {
          on: {
            BACK: "step2",
          },
        },
      },
      on: {
        CLOSE: "closed",
      },
    },
    closed: {
      type: "final",
    },
  },
});
