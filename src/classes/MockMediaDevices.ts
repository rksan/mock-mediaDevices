import type * as types from "@/types";
import * as factory from "@/factory";

//-------
// types
//-------
//type MockMediaDeviceEventEnum = "devicechange";

type MockMediaDeviceEvents = {
  devicechange: EventListenerOrEventListenerObject[];
};

//----------
// classes
//----------
/**
 * Mock of MediaDevices
 *
 * @export
 * @class MockMediaDevicess
 * @implements {types.MediaDevices}
 */
export class MockMediaDevices implements types.MediaDevices {
  #devices: types.MediaDeviceInfo[];
  #events: MockMediaDeviceEvents;

  constructor(devices?: types.MediaDeviceInfo[]) {
    this.#devices = devices || factory.getMediaDeviceInfo();
    this.#events = {
      devicechange: [],
    };
  }

  enumerateDevices(): Promise<types.MediaDeviceInfo[]> {
    return new Promise((resolve) => {
      resolve(this.#devices);
    });
  }

  getDisplayMedia(
    args?: types.mock.MediaDeviceArgs
  ): Promise<types.MediaStream> {
    const options = factory.createMockOptions(args);

    return new Promise((resolve) => {
      const stream = factory.createMediaStream(options);

      this.dispatchEvent(new Event("devicechange"));

      resolve(stream);
    });
  }

  getSupportedConstraints(): types.MediaTrackSupportedConstraints {
    const support: types.MediaTrackSupportedConstraints = {
      autoGainControl: true,
      width: true,
      height: true,
      aspectRatio: true,
      frameRate: true,
      facingMode: true,
      resizeMode: true,
      volume: true,
      sampleRate: true,
      sampleSize: true,
      echoCancellation: true,
      latency: true,
      noiseSuppression: true,
      channelCount: true,
      deviceId: true,
      groupId: true,

      displaySurface: true,
      logicalSurface: true,
    };

    return support;
  }

  getUserMedia(
    options?: types.mock.MediaDeviceArgs
  ): Promise<types.MediaStream> {
    const opt = factory.createMockOptions(options);

    return new Promise((resolve) => {
      const stream = factory.createMediaStream(opt);

      this.dispatchEvent(new Event("devicechange"));

      resolve(stream);
    });
  }

  selectAudioOutput(options?: {
    deviceId?: string;
  }): Promise<types.MediaDeviceInfo | void> {
    return new Promise((resolve) => {
      const info: types.MediaDeviceInfo[] = this.#devices.filter(
        (device: types.MediaDeviceInfo) => {
          if (device.kind === "audiooutput") {
            if (options && options.deviceId) {
              return device.deviceId === options.deviceId;
            } else {
              return true;
            }
          } else {
            return false;
          }
        }
      );

      if (info.length === 0) {
        resolve();
      } else {
        resolve(info[0]);
      }
    });
  }

  addEventListener(
    type: types.mock.enum.MediaDeviceEventEnum,
    callback: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions | undefined
  ): void {
    if (callback) this.#events[type].push(callback);
    if (options) console.log(options);
  }

  dispatchEvent(event: Event): boolean {
    const type = event.type;
    let callbacks: EventListenerOrEventListenerObject[] | null = null;

    switch (type) {
      case "devicechange":
        callbacks = this.#events[type];
        break;
    }

    if (callbacks) {
      callbacks.map((callback) => {
        if (typeof callback === "function") {
          (<EventListener>callback).call(this, event);
        } else {
          (<EventListenerObject>callback).handleEvent.call(this, event);
        }
      });

      return true;
    } else {
      return false;
    }
  }

  removeEventListener(
    type: types.mock.enum.MediaDeviceEventEnum,
    callback: EventListenerOrEventListenerObject | null,
    options?: boolean | EventListenerOptions | undefined
  ): void {
    if (callback) {
      const callbacks = this.#events[type].filter((cb) => cb !== callback);

      this.#events[type] = callbacks;
    }
    if (options) console.log(options);
  }
}
