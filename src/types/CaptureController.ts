export class CaptureController {
  focusBehavior: string;
  constructor() {
    this.focusBehavior = "";
  }
  setFocusBehavior(
    focusBehavior: "focus-captured-surface" | "no-focus-change"
  ) {
    this.focusBehavior = focusBehavior;
  }
}
