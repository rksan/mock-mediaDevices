export interface MediaDeviceInfo {
  readonly deviceId: string;
  readonly groupId: string;
  readonly kind: string;
  readonly label: string;
  toJSON(): JSON;
}
