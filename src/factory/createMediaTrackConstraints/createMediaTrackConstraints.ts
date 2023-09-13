import * as types from "@/types";

import { setConstrains_All, setConstrains_Video } from "./set";

export const createMediaTrackConstraints = (
  kind: types.mock.enum.MediaStreamTrackKindEnum,
  constrains?: types.MediaTrackConstraints
) => {
  const all = setConstrains_All(constrains);

  switch (kind) {
    case "video": {
      const video = setConstrains_Video(constrains);

      return { ...all, ...video };
    }
    case "audio":
      return { ...all };
  }
};
