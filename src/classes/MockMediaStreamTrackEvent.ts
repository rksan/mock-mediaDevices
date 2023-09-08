import type * as types from "@/types";

export class MockMediaStreamTrackEvent
  extends Event
  implements types.MediaStreamTrackEvent
{
  #track: types.MediaStreamTrack;

  constructor(
    //type: string,
    type: types.enum.MediaStreamEventTypeEnum,
    options: {
      bubbles?: boolean;
      cancelable?: boolean;
      composed?: boolean;
      track: types.MediaStreamTrack;
    }
  ) {
    super(type, {
      bubbles: options?.bubbles,
      cancelable: options?.cancelable,
      composed: options?.composed,
    });

    this.#track = options.track;
  }

  get track(): types.MediaStreamTrack {
    return this.#track;
  }
}
