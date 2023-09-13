import type * as types from "@/types";
import { deepClone, getUUID } from "@/utils";
import * as factory from "@/factory";

//-------
// types
//-------

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
  #contentHint: types.mock.enum.MediaStreamTrackContentsHintEnum;
  #enabled: boolean;
  #id: string;
  #kind: types.mock.enum.MediaStreamTrackKindEnum;
  #label: string;
  #muted: boolean;
  #readyState: types.mock.enum.MediaStreamTrackReadyStateEnum;

  #constraints: types.MediaTrackConstraints;
  #settings: types.MediaTrackSettings;
  #events: MockMediaStreamTrackEvents;

  constructor(
    kind: types.mock.enum.MediaStreamTrackKindEnum,
    constrains?: types.MediaTrackConstraints
  ) {
    if (constrains) {
      this.#constraints = constrains;
    } else {
      this.#constraints = factory.createMediaTrackConstraints(kind);
    }

    this.#settings = factory.createMediaTrackSettings(kind, this.#constraints);

    this.#contentHint = "";
    this.#enabled = true;
    this.#id = this.#settings.deviceId || getUUID();
    this.#kind = kind;
    this.#label = `mock-${kind}-stram-track`;
    this.#muted = false;
    this.#readyState = "live";

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
  set contentHint(val: types.mock.enum.MediaStreamTrackContentsHintEnum) {
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

  applyConstraints(options?: types.mock.MediaDeviceArgs): Promise<void> {
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

        this.#settings = factory.createMediaTrackSettings(
          this.#kind,
          this.#constraints
        );
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
    return this.#settings;
  }

  stop(): void {
    this.#readyState = "ended";
    this.#enabled = false;
  }

  addEventListener(
    type: types.mock.enum.MediaStreamTrackEventTypeEnum,
    callback: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions | undefined
  ): void {
    if (callback) this.#events[type].push(callback);
    if (options) console.log(options);
  }

  dispatchEvent(event: Event): boolean {
    let callbacks: EventListenerOrEventListenerObject[] | undefined;

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
      default:
        callbacks = undefined;
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
    type: types.mock.enum.MediaStreamTrackEventTypeEnum,
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
