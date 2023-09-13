import * as types from "@/types";

export const setConstrains_All = (
  constrains?: types.MediaTrackConstraints
): types.mock.MediaTrackConstraintsOfAll => {
  const all: types.mock.MediaTrackConstraintsOfAll = {};

  if (constrains) {
    all.deviceId = constrains.deviceId;
    all.groupId = constrains.groupId;
  }

  return all;
};
