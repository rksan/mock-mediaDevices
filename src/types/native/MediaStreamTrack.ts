import * as types from "@/types";

/**
 * Mock of MediaStreamTrack
 * @ref [MediaStreamTrack | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack)
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
  applyConstraints(options?: types.MediaDeviceOptions): Promise<void>;
  clone(): types.MediaStreamTrack;
  getCapabilities(): types.MediaTrackCapabilities;
  getSettings(): types.MediaTrackSettings;
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
