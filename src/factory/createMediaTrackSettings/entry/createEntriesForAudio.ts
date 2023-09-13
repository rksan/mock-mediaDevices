import * as types from "@/types";
import {
  getConstrainBooleanValue,
  getConstrainULongValue,
  getConstrainDoubleValue,
} from "../utils";

export const createEntriesForAudio =
  (): types.mock.MediaTrackSettings.EntryForAudio[] => {
    return [
      {
        keys: [
          { name: "autoGainControl", default: false },
          { name: "echoCancellation", default: false },
          { name: "noiseSuppression", default: false },
        ],
        type: "boolean",
        value: getConstrainBooleanValue,
      },
      {
        keys: [
          { name: "channelCount", default: 0 },
          { name: "sampleRate", default: 0 },
          { name: "sampleSize", default: 0 },
        ],
        type: "ulong",
        value: getConstrainULongValue,
      },
      {
        keys: [
          { name: "latency", default: 0.0 },
          { name: "volume", default: 0.0 },
        ],
        type: "double",
        value: getConstrainDoubleValue,
      },
    ];
  };
