import type * as types from "@/types";

export interface MediaStream extends EventTarget {
  readonly active: boolean;
  readonly id: string;
  addTrack(track: types.MediaStreamTrack): void;
  clone(): types.MediaStream;
  getAudioTracks(): types.MediaStreamTrack[];
  getTrackById(id: string): types.MediaStreamTrack | undefined;
  getTracks(): types.MediaStreamTrack[];
  getVideoTracks(): types.MediaStreamTrack[];
  removeTrack(track: types.MediaStreamTrack): void;
  addEventListener(
    type: "addtrack" | "removetrack",
    callback: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions | undefined
  ): void;
  dispatchEvent(event: types.MediaStreamTrackEvent): boolean;
  removeEventListener(
    type: "addtrack" | "removetrack",
    callback: EventListenerOrEventListenerObject | null,
    options?: boolean | EventListenerOptions | undefined
  ): void;
  onaddtrack?(event: types.MediaStreamTrackEvent): void;
  onremovetrack?(event: types.MediaStreamTrackEvent): void;
  onactive?(event: types.MediaStreamTrackEvent): void;
  oninactive?(event: types.MediaStreamTrackEvent): void;
}
