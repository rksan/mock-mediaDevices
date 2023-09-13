import type * as types from "@/types";

export const setSettings_Share = (
  settings: types.MediaTrackSettings,
  constraints: types.MediaTrackConstraints,
  shares: types.mock.MediaTrackSettings.EntryForShare[]
) => {
  shares.forEach((entry: types.mock.MediaTrackSettings.EntryForShare) => {
    switch (entry.type) {
      case "string": {
        const share = <types.mock.MediaTrackSettings.EntryOfStringForShare>(
          entry
        );

        share.keys.forEach(
          (key: types.mock.MediaTrackSettings.KeyOfStringForShare) => {
            const name = key.name,
              def = key.default;
            if (name === "cursor") {
              settings[name] = share.value(def, undefined);
            } else {
              const val = constraints[name];
              settings[name] = share.value(def, val);
            }
          }
        );
        break;
      }
      case "boolean": {
        const share = <types.mock.MediaTrackSettings.EntryOfBooleanForShare>(
          entry
        );

        share.keys.forEach(
          (key: types.mock.MediaTrackSettings.KeyOfBooleanForShare) => {
            const name = key.name,
              def = key.default,
              val = constraints[name];

            settings[name] = share.value(def, val);
          }
        );
        break;
      }
    }
  });
};
