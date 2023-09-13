import * as types from "@/types";
import { getConstrainDOMStringValue } from "../utils";

export const createEntriesForAll = (
  kind: "audio" | "video",
  infos: types.MediaDeviceInfo[]
): types.mock.MediaTrackSettings.EntryForAll[] => {
  return [
    {
      keys: [{ name: "deviceId", default: "" }],
      type: "string",
      value(def: string, val?: string | types.ConstrainDOMString): string {
        if (!val) {
          let deviceId = "";

          if (kind === "video") {
            const videos = infos.filter((info) => info.kind === "videoinput");
            if (0 < videos.length) {
              deviceId = videos[0].deviceId;
            }
          } else {
            const audios = infos.filter(
              (info) =>
                info.kind === "audioinput" || info.kind === "audiooutput"
            );
            if (0 < audios.length) {
              deviceId = audios[0].deviceId;
            }
          }

          return deviceId;
        } else {
          return getConstrainDOMStringValue(def, val);
        }
      },
    },
    {
      keys: [{ name: "groupId", default: "" }],
      type: "string",
      value: (def: string, val?: string | types.ConstrainDOMString): string => {
        if (!val) {
          let groupId = "";

          if (kind === "video") {
            const videos = infos.filter((info) => info.kind === "videoinput");
            if (0 < videos.length) groupId = videos[0].groupId;
          } else {
            const audios = infos.filter(
              (info) =>
                info.kind === "audioinput" || info.kind === "audiooutput"
            );
            if (0 < audios.length) groupId = audios[0].groupId;
          }
          return groupId;
        } else {
          return getConstrainDOMStringValue(def, val);
        }
      },
    },
  ];
};
