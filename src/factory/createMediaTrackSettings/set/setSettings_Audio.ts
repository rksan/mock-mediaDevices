import * as types from "@/types";

export const setSettings_Audio = (
  settings: types.MediaTrackSettings,
  constraints: types.MediaTrackConstraints,
  audios: types.mock.MediaTrackSettings.EntryForAudio[]
) => {
  audios.forEach((entry: types.mock.MediaTrackSettings.EntryForAudio) => {
    switch (entry.type) {
      case "boolean": {
        const audio = <types.mock.MediaTrackSettings.EntryOfBooleanForAudio>(
          entry
        );

        audio.keys.forEach(
          (key: types.mock.MediaTrackSettings.KeyOfBooleanForAudio) => {
            const name = key.name,
              def = key.default,
              val = constraints[name];

            settings[name] = audio.value(def, val);
          }
        );
        break;
      }
      case "ulong": {
        const audio = <types.mock.MediaTrackSettings.EntryOfULongForAudio>entry;

        audio.keys.forEach(
          (key: types.mock.MediaTrackSettings.KeyOfULongForAudio) => {
            const name = key.name,
              def = key.default,
              val = constraints[name];

            settings[name] = audio.value(def, val);
          }
        );
        break;
      }
      case "double": {
        const audio = <types.mock.MediaTrackSettings.EntryOfDoubleForAudio>(
          entry
        );

        audio.keys.forEach(
          (key: types.mock.MediaTrackSettings.KeyOfDoubleForAudio) => {
            const name = key.name,
              def = key.default,
              val = constraints[name];

            settings[name] = audio.value(def, val);
          }
        );
        break;
      }
    }
  });
};
