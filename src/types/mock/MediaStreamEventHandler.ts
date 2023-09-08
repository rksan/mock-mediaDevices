import type * as types from "@/types";

export interface MediaStreamEventListener {
  (event: types.MediaStreamTrackEvent): void;
}

export interface MediaStreamEventListenerObject extends EventListenerObject {
  handleEvent(event: types.MediaStreamTrackEvent): void;
}

export type MediaStreamEventHandler =
  | MediaStreamEventListener
  | MediaStreamEventListenerObject;
