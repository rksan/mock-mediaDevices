import {
  MediaDeviceInfo,
  MediaDeviceOptions,
  MediaTrackSupportedConstraints,
} from "@/types";

import { MediaStream } from "@/mocks/MediaStream.mock";

export interface MediaDevices extends EventTarget {
  enumerateDevices(): Promise<MediaDeviceInfo[]>;
  getDisplayMedia(options?: MediaDeviceOptions): Promise<MediaStream>;
  getSupportedConstraints(): MediaTrackSupportedConstraints;
  getUserMedia(options?: MediaDeviceOptions): Promise<MediaStream>;
  selectAudioOutput(options: {
    deviceId: string;
  }): Promise<MediaDeviceInfo | void>;
  ondevicechange?(event: Event): void;
}
