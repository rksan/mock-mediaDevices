import * as types from "@/types";

// keys
interface Keys<P> {
  name: string;
  default: P;
}

// entries
interface Entry<P, O> {
  keys: Keys<P>[];
  type: string;
  value: (def: P, val?: P | O) => P;
}

interface EntryOfString extends Entry<string, types.ConstrainDOMString> {
  type: "string";
}

interface EntryOfBoolean extends Entry<boolean, types.ConstrainBoolean> {
  type: "boolean";
}

interface EntryOfULong extends Entry<number, types.ConstrainULong> {
  type: "ulong";
}

interface EntryOfDouble extends Entry<number, types.ConstrainDouble> {
  type: "double";
}

// "all"
export interface KeyOfStringForAll extends Keys<string> {
  name: "groupId" | "deviceId";
  default: string;
}

export interface EntryOfStringForAll extends EntryOfString {
  keys: KeyOfStringForAll[];
}

export type EntryForAll = EntryOfStringForAll;

// "audio"
export interface KeyOfBooleanForAudio extends Keys<boolean> {
  name: "autoGainControl" | "echoCancellation" | "noiseSuppression";
  default: boolean;
}

export interface EntryOfBooleanForAudio extends EntryOfBoolean {
  keys: KeyOfBooleanForAudio[];
}

export interface KeyOfULongForAudio extends Keys<number> {
  name: "channelCount" | "sampleRate" | "sampleSize";
  default: number;
}

export interface EntryOfULongForAudio extends EntryOfULong {
  keys: KeyOfULongForAudio[];
}

export interface KeyOfDoubleForAudio extends Keys<number> {
  name: "latency" | "volume";
  default: number;
}

export interface EntryOfDoubleForAudio extends EntryOfDouble {
  keys: KeyOfDoubleForAudio[];
}

export type EntryForAudio =
  | EntryOfBooleanForAudio
  | EntryOfULongForAudio
  | EntryOfDoubleForAudio;

// "video"
export interface KeyOfStringForVideo extends Keys<string> {
  name: "facingMode" | "resizeMode";
  default: string;
}
export interface EntryOfStringForVideo extends EntryOfString {
  keys: KeyOfStringForVideo[];
}

export interface KeyOfULongForVideo extends Keys<number> {
  name: "frameRate" | "height" | "width";
}

export interface EntryOfULongForVideo extends EntryOfULong {
  keys: KeyOfULongForVideo[];
}

export interface KeyOfDoubleForVideo extends Keys<number> {
  name: "aspectRatio";
  default: number;
}
export interface EntryOfDoubleForVideo extends EntryOfDouble {
  keys: KeyOfDoubleForVideo[];
}

export type EntryForVideo =
  | EntryOfStringForVideo
  | EntryOfULongForVideo
  | EntryOfDoubleForVideo;

// "share"
export interface KeyOfStringForShare extends Keys<string> {
  name: "cursor" | "displaySurface";
  default: string;
}
export interface EntryOfStringForShare extends EntryOfString {
  keys: KeyOfStringForShare[];
}

export interface KeyOfBooleanForShare extends Keys<boolean> {
  name: "logicalSurface";
  default: boolean;
}
export interface EntryOfBooleanForShare extends EntryOfBoolean {
  keys: KeyOfBooleanForShare[];
}

export type EntryForShare = EntryOfStringForShare | EntryOfBooleanForShare;
