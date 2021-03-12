import { Machine } from "xstate";

export const promiseMachine = Machine({
  id: "promise",
  initial: "pending",
  states: {
    pending: {
      on: {
        RESOLVE: "resolved",
        REJECT: "reject",
      },
    },
    resolved: {
      type: "final",
    },
    rejected: {
      type: "final",
    },
  },
});
