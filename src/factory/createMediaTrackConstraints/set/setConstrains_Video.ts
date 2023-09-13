import * as types from "@/types";

export const setConstrains_Video = (
  constrains?: types.MediaTrackConstraints
): types.mock.MediaTrackConstraintsOfVideo => {
  return {
    ...{
      aspectRatio: 16 / 9,
      facingMode: "environment",
      frameRate: 30,
      //height: 320,
      width: 640,
      //resizeMode: "crop-and-scale",
    },
    ...(<types.mock.MediaTrackConstraintsOfVideo>constrains || {}),
  };
};
