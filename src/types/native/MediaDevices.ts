import * as types from "@/types";

/**
 * Mock of MediaDevices
 * @ref [MediaDevices | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices)
 * @export
 * @interface MediaDevices
 * @extends {EventTarget}
 */
export interface MediaDevices extends EventTarget {
  enumerateDevices(): Promise<types.MediaDeviceInfo[]>;
  getDisplayMedia(options?: {
    video?: boolean | types.MediaTrackConstraints;
    audio?: boolean | types.MediaTrackConstraints;
    controller?: types.CaptureController;
    preferCurrentTab?: boolean;
    selfBrowserSurface?: "include" | "exclude";
    systemAudio?: "include" | "exclude";
  }): Promise<types.MediaStream>;
  getSupportedConstraints(): types.MediaTrackSupportedConstraints;
  getUserMedia(options?: {
    video?: boolean | types.MediaTrackConstraints;
    audio?: boolean | types.MediaTrackConstraints;
    controller?: types.CaptureController;
    preferCurrentTab?: boolean;
    selfBrowserSurface?: "include" | "exclude";
    systemAudio?: "include" | "exclude";
  }): Promise<types.MediaStream>;
  selectAudioOutput(options?: {
    deviceId?: string;
  }): Promise<types.MediaDeviceInfo | void>;
  ondevicechange?(event: Event): void;
}
