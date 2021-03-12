import { Machine } from "xstate";

export const fetchMachine = Machine({
  id: "fetch",
  initial: "idle",
  states: {
    idle: {
      on: {
        FETCH: "loading",
      },
    },
    loading: {
      on: {
        SUCCESS: "done",
        FAILURE: "failed",
        TIMEOUT: "timedout",
      },
    },
    done: {
      type: "final",
    },
    failed: {
      type: "final",
    },
    timedout: {
      type: "final",
    },
  },
});
