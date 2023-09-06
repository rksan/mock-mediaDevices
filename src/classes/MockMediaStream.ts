import * as types from "@/types";
import { MockMediaStreamTrackEvent } from "@/classes/MockMediaStreamEvent";

//-------
// types
//-------
type MockMediaStreamEventEnum = "addtrack" | "removetrack";

type MockMediaStreamEvents = {
  addtrack: EventListenerOrEventListenerObject[];
  removetrack: EventListenerOrEventListenerObject[];
};

/**
 *
 * @export
 * @class MockMediaStream
 * @extends {EventTarget}
 */
export class MockMediaStream implements types.MediaStream {
  #tracks: types.MediaStreamTrack[] = [];
  #events: MockMediaStreamEvents = {
    addtrack: [],
    removetrack: [],
  };

  get active() {
    return this.#tracks.filter((t) => t.enabled === true).length !== 0;
  }
  get id() {
    return this.#tracks.length === 0 ? "" : this.#tracks[0].id;
  }

  // methods
  addTrack(track: types.MediaStreamTrack): void {
    if (this.#tracks.filter((t) => t.id === track.id).length === 0) {
      this.#tracks.push(track);
      const event = new MockMediaStreamTrackEvent("addtrack", { track });
      this.dispatchEvent(event);
    }
  }

  clone(): types.MediaStream {
    return structuredClone(this);
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
        const event = new MockMediaStreamTrackEvent("removetrack", { track });
        this.dispatchEvent(event);
      }
    });
  }

  addEventListener(
    type: MockMediaStreamEventEnum,
    callback: EventListenerOrEventListenerObject | null,
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
    type: MockMediaStreamEventEnum,
    callback: EventListenerOrEventListenerObject | null,
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
