import * as types from "@/types";
import * as factory from "@/factory";

import {
  createEntriesForAll,
  createEntriesForAudio,
  createEntriesForVideo,
  createEntriesForShare,
} from "./entry";

import {
  setSettings_All,
  setSettings_Audio,
  setSettings_Video,
  setSettings_Share,
} from "./set";

/**
 *
 * @param {("video" | "audio")} kind
 * @param {types.MediaTrackConstraints} constraints
 * @param {types.MediaDeviceInfo[]} [deviceInfos]
 * @return {types.MediaTrackSettings}
 */
export const createMediaTrackSettings = (
  kind: "video" | "audio",
  constraints: types.MediaTrackConstraints,
  deviceInfos?: types.MediaDeviceInfo[]
): types.MediaTrackSettings => {
  const settings: types.MediaTrackSettings = {};

  const infos = deviceInfos || factory.getMediaDeviceInfo();
  const alls = createEntriesForAll(kind, infos);
  const audios = createEntriesForAudio();
  const videos = createEntriesForVideo();
  const shares = createEntriesForShare();

  setSettings_All(settings, constraints, alls);
  setSettings_Audio(settings, constraints, audios);
  setSettings_Video(settings, constraints, videos);
  setSettings_Share(settings, constraints, shares);

  return settings;
};
