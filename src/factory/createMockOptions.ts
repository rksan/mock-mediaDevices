import * as types from "@/types";

export const createMockOptions = (options?: types.mock.MediaDeviceArgs) => {
  return options ? { video: options.video, audio: options.audio } : {};
};
