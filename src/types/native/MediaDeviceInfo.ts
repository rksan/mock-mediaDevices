/**
 * Mock of MediaDeviceInfo
 * @ref [MediaDeviceInfo | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo)
 * @export
 * @interface MediaDeviceInfo
 */
export interface MediaDeviceInfo {
  readonly deviceId: string;
  readonly groupId: string;
  readonly kind: "videoinput" | "audioinput" | "audiooutput";
  readonly label: string;
  toJSON(): JSON;
}
