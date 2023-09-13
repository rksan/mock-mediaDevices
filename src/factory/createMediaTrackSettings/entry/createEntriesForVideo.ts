import * as types from "@/types";
import {
  getConstrainDOMStringValue,
  getConstrainDoubleValue,
  getConstrainULongValue,
} from "../utils";

export const createEntriesForVideo =
  (): types.mock.MediaTrackSettings.EntryForVideo[] => {
    return [
      {
        keys: [
          { name: "facingMode", default: "environment" },
          { name: "resizeMode", default: "none" },
        ],
        type: "string",
        value: getConstrainDOMStringValue,
      },
      {
        type: "ulong",
        keys: [
          { name: "frameRate", default: 30 },
          { name: "width", default: 640 },
          { name: "height", default: 320 },
        ],
        value: getConstrainULongValue,
      },
      {
        type: "double",
        keys: [{ name: "aspectRatio", default: 16 / 9 }],
        value: getConstrainDoubleValue,
      },
    ];
  };
