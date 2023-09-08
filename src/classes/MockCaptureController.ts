import type * as types from "@/types";

export class MockCaptureController implements types.CaptureController {
  focusBehavior: "focus-captured-surface" | "no-focus-change";

  constructor() {
    this.focusBehavior = "focus-captured-surface";
  }
  setFocusBehavior(
    focusBehavior: "focus-captured-surface" | "no-focus-change"
  ) {
    this.focusBehavior = focusBehavior;
  }
}
