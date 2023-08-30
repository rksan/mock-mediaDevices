import {
  MediaDeviceOptions,
  MediaTrackCapabilities,
  MediaTrackSettings,
} from "@/types";

import { MediaStream } from "@/mocks/MediaStream.mock";

/**
 *
 * @export
 * @interface MediaStreamTrack
 * @extends {EventTarget}
 */
export interface MediaStreamTrack extends EventTarget {
  contentHint:
    | ""
    | "speech"
    | "speech-recognition"
    | "music"
    | "motion"
    | "detail"
    | "text";
  enabled: boolean;
  readonly id: string;
  readonly kind: "audio" | "video";
  readonly label: string;
  readonly muted: boolean;
  readonly readyState: "live" | "ended";

  // methods
  applyConstraints(options?: MediaDeviceOptions): Promise<MediaStream>;
  clone(): MediaStreamTrack;
  getCapabilities(): MediaTrackCapabilities;
  getSettings(): MediaTrackSettings;
  stop(): void;

  // events
  onended?(event: Event): void;
  onmute?(event: Event): void;
  /**
   * @deprecated
   */
  onoverconstrained?(event: Event): void;
  onunmute?(event: Event): void;
}

export class MediaStreamTrackEvent extends Event {
  #track: MediaStreamTrack;

  constructor(type: string, options: EventInit & { track: MediaStreamTrack }) {
    super(type, options);
    this.#track = options.track;
  }

  get track(): MediaStreamTrack {
    return this.#track;
  }
}
