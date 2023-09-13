import * as types from "@/types";

export const setSettings_Video = (
  settings: types.MediaTrackSettings,
  constraints: types.MediaTrackConstraints,
  videos: types.mock.MediaTrackSettings.EntryForVideo[]
) => {
  videos.forEach((entry: types.mock.MediaTrackSettings.EntryForVideo) => {
    switch (entry.type) {
      case "string": {
        const video = <types.mock.MediaTrackSettings.EntryOfStringForVideo>(
          entry
        );

        video.keys.forEach(
          (key: types.mock.MediaTrackSettings.KeyOfStringForVideo) => {
            const name = key.name,
              def = key.default,
              val = constraints[name];

            settings[name] = video.value(def, val);
          }
        );
        break;
      }
      case "ulong": {
        const video = <types.mock.MediaTrackSettings.EntryOfULongForVideo>entry;

        video.keys.forEach(
          (key: types.mock.MediaTrackSettings.KeyOfULongForVideo) => {
            const name = key.name,
              def = key.default,
              val = constraints[name];

            settings[name] = video.value(def, val);
          }
        );
        break;
      }
      case "double": {
        const video = <types.mock.MediaTrackSettings.EntryOfDoubleForVideo>(
          entry
        );

        video.keys.forEach(
          (key: types.mock.MediaTrackSettings.KeyOfDoubleForVideo) => {
            const name = key.name,
              def = key.default,
              val = constraints[name];

            settings[name] = video.value(def, val);
          }
        );
        break;
      }
    }
  });
};
