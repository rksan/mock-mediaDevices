import * as types from "@/types";
import { getConstrainDOMStringValue, getConstrainBooleanValue } from "../utils";

export const createEntriesForShare =
  (): types.mock.MediaTrackSettings.EntryForShare[] => {
    return [
      {
        type: "string",
        keys: [
          { name: "cursor", default: "always" },
          { name: "displaySurface", default: "application" },
        ],
        value: getConstrainDOMStringValue,
      },
      {
        type: "boolean",
        keys: [{ name: "logicalSurface", default: false }],
        value: getConstrainBooleanValue,
      },
    ];
  };
