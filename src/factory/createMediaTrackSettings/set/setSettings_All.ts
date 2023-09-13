import * as types from "@/types";

export const setSettings_All = (
  settings: types.MediaTrackSettings,
  constraints: types.MediaTrackConstraints,
  alls: types.mock.MediaTrackSettings.EntryForAll[]
): void => {
  alls.forEach((entry: types.mock.MediaTrackSettings.EntryForAll) => {
    switch (entry.type) {
      case "string": {
        const keys = <types.mock.MediaTrackSettings.KeyOfStringForAll[]>(
          entry.keys
        );
        keys.forEach((key: types.mock.MediaTrackSettings.KeyOfStringForAll) => {
          const name = key.name,
            def = key.default,
            val = constraints[name];

          settings[name] = entry.value(def, val);
        });
        break;
      }
    }
  });
};
