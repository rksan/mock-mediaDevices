/**
 * Mock of CaptureController
 * @ref [CaptureController | MDN](https://developer.mozilla.org/en-US/docs/Web/API/CaptureController)
 * @export
 */
export interface CaptureController {
  setFocusBehavior(
    focusBehavior: "focus-captured-surface" | "no-focus-change"
  ): void;
}
