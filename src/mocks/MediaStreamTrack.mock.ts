import { MediaDeviceOptions } from "@/types/MediaDevices";

export const createMediaStreamTrack = (options: {
  kind: "video" | "audio";
}): MediaStreamTrack => {
  type MediaStreamTrackEvents = {
    ended: EventListenerOrEventListenerObject[];
    mute: EventListenerOrEventListenerObject[];
    overconstrained: EventListenerOrEventListenerObject[];
    unmute: EventListenerOrEventListenerObject[];
  };

  const events: MediaStreamTrackEvents = {
    ended: [],
    mute: [],
    overconstrained: [],
    unmute: [],
  };

  const track: MediaStreamTrack = {
    contentHint: "",
    enabled: false,
    id: `${options.kind}-stream-track-id-1`,
    kind: options.kind,
    label: `${options.kind}-stram-track-label-1`,
    muted: false,
    readyState: "live",

    applyConstraints(options?: MediaDeviceOptions): Promise<MediaStream> {
      return new Promise((resolve) => {
        const opt = createMockOptions(options);
        const stream = createMediaStream(opt);
        return resolve(stream);
      });
    },

    clone: function (): MediaStreamTrack {
      return structuredClone(this);
    },

    getCapabilities: function (): MediaTrackCapabilities {
      throw new Error("Function not implemented.");
    },

    getSettings: function (): MediaTrackSettings {
      throw new Error("Function not implemented.");
    },

    stop: function (): void {
      throw new Error("Function not implemented.");
    },

    addEventListener: function (
      type: string,
      callback: EventListenerOrEventListenerObject | null,
      options?: boolean | AddEventListenerOptions | undefined
    ): void {
      switch (type) {
        case "ended":
        case "mute":
        case "overconstrained":
        case "unmute":
          if (callback) events[type].push(callback);
          if (options) console.log(options);
          break;
      }
    },

    dispatchEvent: function (event: Event): boolean {
      let callbacks: EventListenerOrEventListenerObject[] = [];

      switch (event.type) {
        case "ended":
          callbacks = events.ended;
          break;
        case "mute":
          callbacks = events.mute;
          break;
        case "overconstrained":
          callbacks = events.overconstrained;
          break;
        case "unmute":
          callbacks = events.unmute;
          break;
      }

      if (callbacks) {
        callbacks.map((callback: EventListenerOrEventListenerObject) => {
          if (typeof callback === "function") {
            callback(event);
          } else {
            const obj: EventListenerObject = callback;

            obj.handleEvent(event);
          }
        });
        return true;
      }

      return false;
    },

    removeEventListener: function (
      type: string,
      callback: EventListenerOrEventListenerObject | null,
      options?: boolean | EventListenerOptions | undefined
    ): void {
      switch (type) {
        case "ended":
        case "mute":
        case "overconstrained":
        case "unmute": {
          const ary: EventListenerOrEventListenerObject[] = events[type].filter(
            (cb: EventListenerOrEventListenerObject) => cb !== callback
          );

          events[type] = ary;

          if (options) console.log(options);

          break;
        }
      }
    },
  };
  return track;
};
