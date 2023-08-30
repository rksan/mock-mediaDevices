import { MediaDeviceOptions } from "@/types";

export const createMockOptions = (options?: MediaDeviceOptions) => {
  return options ? { video: options.video, audio: options.audio } : {};
};
