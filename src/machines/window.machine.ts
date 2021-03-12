import { Machine } from "xstate";

export const windowMachine = Machine({
  id: "window",
  initial: "windowed",
  context: {
    width: "600px",
    height: "400px",
  },
  states: {
    windowed: {
      on: {
        MINIMIZE: "minimized",
        ZOOM: "zoomed",
      },
    },
    minimized: {
      on: {
        EXIT_MINIMIZED: "windowed",
      },
    },
    zoomed: {
      on: {
        EXIT_ZOOMED: "windowed",
      },
    },
  },
});
