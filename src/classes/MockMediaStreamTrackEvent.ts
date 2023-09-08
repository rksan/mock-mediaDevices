import type * as types from "@/types";

export class MockMediaStreamTrackEvent
  extends Event
  implements types.MediaStreamTrackEvent
{
  bubbles: boolean = false;
  cancelBubble: boolean = false;
  cancelable: boolean = false;
  composed: boolean = false;
  currentTarget: EventTarget | null;
  defaultPrevented: boolean = false;
  eventPhase: number = Event.NONE;
  isTrusted: boolean = false;
  returnValue: boolean = false;
  srcElement: EventTarget | null;
  target: EventTarget | null;
  timeStamp: number = Date.now();
  type: string = "";
  /* NONE: 0;
  CAPTURING_PHASE: 1;
  AT_TARGET: 2;
  BUBBLING_PHASE: 3; */

  #track: types.MediaStreamTrack;

  constructor(
    type: string,
    target: types.MediaStream,
    track: types.MediaStreamTrack,
    options?: {
      bubbles?: boolean;
      cancelable?: boolean;
      composed?: boolean;
    }
  ) {
    super(type, options);

    this.currentTarget = this.srcElement = this.target = target;

    this.#track = track;
  }

  get track(): types.MediaStreamTrack {
    return this.#track;
  }
}
