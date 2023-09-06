import * as types from "@/types";

export class MockMediaStreamTrackEvent
  extends Event
  implements types.MediaStreamTrackEvent
{
  #track: types.MediaStreamTrack;

  constructor(
    type: string,
    options: EventInit & { track: types.MediaStreamTrack }
  ) {
    super(type, options);
    this.#track = options.track;
  }

  get track(): types.MediaStreamTrack {
    return this.#track;
  }
}
