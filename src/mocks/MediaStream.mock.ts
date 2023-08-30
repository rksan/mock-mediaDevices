import { MediaStreamTrack, MediaStreamTrackEvent } from "@/types";

/**
 *
 * @export
 * @class MediaStream
 * @extends {EventTarget}
 */
export class MediaStream extends EventTarget {
  #tracks: MediaStreamTrack[] = [];

  constructor() {
    super();
  }

  get active() {
    return this.#tracks.filter((t) => t.enabled === true).length !== 0;
  }
  get id() {
    return this.#tracks.length === 0 ? "" : this.#tracks[0].id;
  }

  // methods
  addTrack(track: MediaStreamTrack): void {
    if (this.#tracks.filter((t) => t.id === track.id).length === 0) {
      this.#tracks.push(track);
      const event = new MediaStreamTrackEvent("addtrack", { track });
      this.dispatchEvent(event);
    }
  }

  clone() {
    return structuredClone(this);
  }

  getAudioTracks(): MediaStreamTrack[] {
    return this.#tracks.filter((t) => t.kind === "audio");
  }

  getTrackById(id: string): MediaStreamTrack | undefined {
    return this.#tracks.filter((t) => t.id === id).pop();
  }

  /**
   * @experimental
   */
  getTracks(): MediaStreamTrack[] {
    return this.#tracks;
  }

  getVideoTracks(): MediaStreamTrack[] {
    return this.#tracks.filter((t) => t.kind === "video");
  }

  removeTrack(track: MediaStreamTrack): void {
    this.#tracks = this.#tracks.filter((t) => {
      if (t.id !== track.id) {
        const event = new MediaStreamTrackEvent("removetrack", { track });
        this.dispatchEvent(event);
      }
    });
  }

  //events
  onaddtrack?(event: MediaStreamTrackEvent): void;
  onremovetrack?(event: MediaStreamTrackEvent): void;
}
