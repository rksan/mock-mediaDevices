import type * as types from "@/types";
import * as classes from "@/classes";
import { deepClone, getUUID } from "@/utils";

//-------
// types
//-------

type MockMediaStreamEvents = {
  addtrack: types.mock.MediaStreamEventHandler[];
  removetrack: types.mock.MediaStreamEventHandler[];
};

/**
 *
 * @export
 * @class MockMediaStream
 * @extends {EventTarget}
 */
export class MockMediaStream extends EventTarget implements types.MediaStream {
  #id: string;

  #tracks: types.MediaStreamTrack[] = [];
  #events: MockMediaStreamEvents = {
    addtrack: [],
    removetrack: [],
  };

  constructor() {
    super();
    this.#id = getUUID();
  }

  get active(): boolean {
    return this.#tracks.filter((t) => t.enabled === true).length !== 0;
  }
  get id(): string {
    return this.#id;
  }

  // methods
  addTrack(track: types.MediaStreamTrack): void {
    if (this.#tracks.filter((t) => t.id === track.id).length === 0) {
      this.#tracks.push(track);
      const event = new classes.MockMediaStreamTrackEvent("addtrack", {
        track,
      });
      this.dispatchEvent(event);
    }
  }

  clone(): types.MediaStream {
    return deepClone(this);
  }

  getAudioTracks(): types.MediaStreamTrack[] {
    return this.#tracks.filter((t) => t.kind === "audio");
  }

  getTrackById(id: string): types.MediaStreamTrack | undefined {
    return this.#tracks.filter((t) => t.id === id).pop();
  }

  /**
   * @experimental
   */
  getTracks(): types.MediaStreamTrack[] {
    return this.#tracks;
  }

  getVideoTracks(): types.MediaStreamTrack[] {
    return this.#tracks.filter((t) => t.kind === "video");
  }

  removeTrack(track: types.MediaStreamTrack): void {
    this.#tracks = this.#tracks.filter((t) => {
      if (t.id !== track.id) {
        const event = new classes.MockMediaStreamTrackEvent("removetrack", {
          track,
        });
        this.dispatchEvent(event);
      }
    });
  }

  addEventListener(
    type: types.enum.MediaStreamEventTypeEnum,
    callback: types.mock.MediaStreamEventHandler | null,
    options?: boolean | AddEventListenerOptions | undefined
  ): void {
    if (callback) this.#events[type].push(callback);
    if (options) console.log(options);
  }

  dispatchEvent(event: types.MediaStreamTrackEvent): boolean {
    const type = event.type;

    switch (type) {
      case "addtrack":
      case "removetrack": {
        this.#events[type].forEach((callback) => {
          if (typeof callback === "function") {
            (<EventListener>callback).call(this, event);
          } else {
            (<EventListenerObject>callback).handleEvent.call(this, event);
          }
        });
        return true;
      }
      default:
        return false;
    }
  }

  removeEventListener(
    type: types.enum.MediaStreamEventTypeEnum,
    callback: types.mock.MediaStreamEventHandler | null,
    options?: boolean | EventListenerOptions | undefined
  ): void {
    if (callback) {
      this.#events[type] = this.#events[type].filter((cb) => cb === callback);
    }
    if (options) console.log(options);
  }

  //events
  onaddtrack?(event: types.MediaStreamTrackEvent): void;
  onremovetrack?(event: types.MediaStreamTrackEvent): void;
}
