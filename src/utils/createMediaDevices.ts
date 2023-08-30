import {
  MediaDeviceInfo,
  MediaDeviceOptions,
  MediaDevices,
  MediaTrackSupportedConstraints,
} from "@/types";

import { createMediaStream, createMockOptions } from "@/utils";

import { MediaStream } from "@/mocks/MediaStream.mock";

type MediaDeviceEvents = {
  devicechange: EventListenerOrEventListenerObject[];
};

export const createMediaDevices = (
  devices: MediaDeviceInfo[]
): MediaDevices => {
  const events: MediaDeviceEvents = {
    devicechange: [],
  };

  const mediaDevices: MediaDevices = {
    enumerateDevices() {
      return new Promise((resolve) => {
        resolve(devices);
      });
    },

    getDisplayMedia(options?: MediaDeviceOptions): Promise<MediaStream> {
      const opt = createMockOptions(options);

      return new Promise((resolve) => {
        const stream = createMediaStream(opt);
        resolve(stream);
      });
    },

    getSupportedConstraints: function (): MediaTrackSupportedConstraints {
      throw new Error("Function not implemented.");
    },

    getUserMedia: function (
      options?: MediaDeviceOptions
    ): Promise<MediaStream> {
      const opt = createMockOptions(options);

      return new Promise((resolve) => {
        const stream = createMediaStream(opt);
        resolve(stream);
      });
    },

    selectAudioOutput: function (options: {
      deviceId: string;
    }): Promise<MediaDeviceInfo | void> {
      return new Promise((resolve) => {
        const info: MediaDeviceInfo[] = devices.filter(
          (device: MediaDeviceInfo) => device.deviceId === options.deviceId
        );

        if (info.length === 0) {
          resolve();
        } else {
          resolve(info[0]);
        }
      });
    },

    addEventListener: function (
      type: string,
      callback: EventListenerOrEventListenerObject | null,
      options?: boolean | AddEventListenerOptions | undefined
    ): void {
      if (callback) {
        switch (type) {
          case "devicechange":
            events[type].push(callback);
            if (options) {
              console.log(options);
            }
            break;
        }
      }
    },

    dispatchEvent: function (event: Event): boolean {
      const type = event.type;
      let callbacks: EventListenerOrEventListenerObject[] | null = null;

      switch (type) {
        case "devicechange":
          callbacks = events[type];
          break;
      }

      if (callbacks) {
        callbacks.map((callback) => {
          if (typeof callback === "function") {
            callback(event);
          } else {
            const obj = callback;
            obj.handleEvent(event);
          }
        });

        return true;
      } else {
        return false;
      }
    },

    removeEventListener: function (
      type: string,
      callback: EventListenerOrEventListenerObject | null,
      options?: boolean | EventListenerOptions | undefined
    ): void {
      if (callback) {
        switch (type) {
          case "devicechange": {
            const callbacks = events[type].filter((cb) => cb !== callback);

            events[type] = callbacks;

            if (options) {
              console.log(options);
            }
            break;
          }
        }
      }
    },
  };

  return mediaDevices;
};
