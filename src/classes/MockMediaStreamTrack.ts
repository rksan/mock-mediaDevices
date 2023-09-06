import * as types from "@/types";
import { deepClone } from "@/utils";
import { createMediaTrackSettings } from "@/factory";

//-------
// types
//-------
type MockMediaStreamTrackContentsHintEnum =
  | ""
  | "speech"
  | "speech-recognition"
  | "music"
  | "motion"
  | "detail"
  | "text";

type MockMediaStreamTrackKindEnum = "audio" | "video";

type MockMediaStreamTrackReadyStateEnum = "live" | "ended";

type MockMediaStreamTrackEventTypeEnum =
  | "ended"
  | "mute"
  | "overconstrained"
  | "unmute";

type MockMediaStreamTrackEvents = {
  ended: EventListenerOrEventListenerObject[];
  mute: EventListenerOrEventListenerObject[];
  overconstrained: EventListenerOrEventListenerObject[];
  unmute: EventListenerOrEventListenerObject[];
};

//---------
// classes
//---------
export class MockMediaStreamTrack implements types.MediaStreamTrack {
  #contentHint: MockMediaStreamTrackContentsHintEnum;
  #enabled: boolean;
  #id: string;
  #kind: MockMediaStreamTrackKindEnum;
  #label: string;
  #muted: boolean;
  #readyState: MockMediaStreamTrackReadyStateEnum;

  #constraints: types.MediaTrackConstraints;
  #events: MockMediaStreamTrackEvents;

  constructor(options: {
    constrains: types.MediaTrackConstraints;
    kind: MockMediaStreamTrackKindEnum;
  }) {
    this.#contentHint = "";
    this.#enabled = true;
    this.#id = `${options.kind}-stream-track-id-1`;
    this.#kind = options.kind;
    this.#label = `${options.kind}-stram-track-label-1`;
    this.#muted = false;
    this.#readyState = "live";

    this.#constraints = options.constrains;
    this.#events = {
      ended: [],
      mute: [],
      overconstrained: [],
      unmute: [],
    };
  }

  get contentHint() {
    return this.#contentHint;
  }
  set contentHint(val: MockMediaStreamTrackContentsHintEnum) {
    this.#contentHint = val;
  }

  get enabled() {
    return this.#enabled;
  }
  set enabled(val: boolean) {
    this.#enabled = val;
  }

  get id() {
    return this.#id;
  }

  get kind() {
    return this.#kind;
  }

  get label() {
    return this.#label;
  }

  get muted() {
    return this.#muted;
  }

  get readyState() {
    return this.#readyState;
  }

  applyConstraints(options?: types.MediaDeviceOptions): Promise<void> {
    return new Promise((resolve) => {
      if (options) {
        switch (this.#kind) {
          case "video": {
            if (typeof options.video === "object")
              this.#constraints = options.video;
            break;
          }
          case "audio": {
            if (typeof options.audio === "object")
              this.#constraints = options.audio;
            break;
          }
        }
      }

      return resolve();
    });
  }

  clone(): types.MediaStreamTrack {
    return deepClone(this);
  }

  getCapabilities(): types.MediaTrackCapabilities {
    return {};
  }

  getSettings(): types.MediaTrackSettings {
    return createMediaTrackSettings(this.#constraints);
  }

  stop(): void {
    this.#readyState = "ended";
    this.#enabled = false;
  }

  addEventListener(
    type: MockMediaStreamTrackEventTypeEnum,
    callback: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions | undefined
  ): void {
    if (callback) this.#events[type].push(callback);
    if (options) console.log(options);
  }

  dispatchEvent(event: Event): boolean {
    let callbacks: EventListenerOrEventListenerObject[] = [];

    switch (event.type) {
      case "ended":
        callbacks = this.#events.ended;
        break;
      case "mute":
        callbacks = this.#events.mute;
        break;
      case "overconstrained":
        callbacks = this.#events.overconstrained;
        break;
      case "unmute":
        callbacks = this.#events.unmute;
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
  }

  removeEventListener(
    type: MockMediaStreamTrackEventTypeEnum,
    callback: EventListenerOrEventListenerObject | null,
    options?: boolean | EventListenerOptions | undefined
  ): void {
    const ary: EventListenerOrEventListenerObject[] = this.#events[type].filter(
      (cb: EventListenerOrEventListenerObject) => cb !== callback
    );

    this.#events[type] = ary;

    if (options) console.log(options);
  }
}
