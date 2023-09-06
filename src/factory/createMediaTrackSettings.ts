import * as types from "@/types";

const getConstrainDOMStringValue = (val: string | types.ConstrainDOMString) => {
  if (typeof val === "string") {
    return val;
  } else {
    return val.exact || val.ideal;
  }
};

const getConstrainBooleanValue = (val: boolean | types.ConstrainBoolean) => {
  if (typeof val === "object") {
    return val.exact || val.ideal;
  } else {
    return val;
  }
};

const getConstrainULongValue = (val: number | types.ConstrainULong) => {
  if (typeof val === "object") {
    return val.exact || val.ideal || val.max || val.min;
  } else {
    return val;
  }
};

const getConstrainDoubleValue = (val: number | types.ConstrainDouble) => {
  if (typeof val === "object") {
    return val.exact || val.ideal || val.max || val.min;
  } else {
    return val;
  }
};

export const createMediaTrackSettings = (
  constraints: types.MediaTrackConstraints
): types.MediaTrackSettings => {
  const settings: types.MediaTrackSettings = {};

  Object.entries(constraints).forEach(([key]) => {
    switch (key) {
      case "deviceId": {
        const val = constraints[key];
        if (val !== undefined) settings[key] = getConstrainDOMStringValue(val);
        break;
      }
      case "groupId": {
        const val = constraints[key];
        if (val !== undefined) settings[key] = getConstrainDOMStringValue(val);
        break;
      }
      case "autoGainControl": {
        const val = constraints[key];
        if (val !== undefined) settings[key] = getConstrainBooleanValue(val);
        break;
      }
      case "channelCount": {
        const val = constraints[key];
        if (val !== undefined) settings[key] = getConstrainULongValue(val);
        break;
      }
      case "echoCancellation": {
        const val = constraints[key];
        if (val !== undefined) settings[key] = getConstrainBooleanValue(val);
        break;
      }
      case "latency": {
        const val = constraints[key];
        if (val !== undefined) settings[key] = getConstrainDoubleValue(val);
        break;
      }
      case "noiseSuppression": {
        const val = constraints[key];
        if (val !== undefined) settings[key] = getConstrainBooleanValue(val);
        break;
      }
      case "sampleRate": {
        const val = constraints[key];
        if (val !== undefined) settings[key] = getConstrainULongValue(val);
        break;
      }
      case "sampleSize": {
        const val = constraints[key];
        if (val !== undefined) settings[key] = getConstrainULongValue(val);
        break;
      }
      case "volume": {
        const val = constraints[key];
        if (val !== undefined) settings[key] = getConstrainDoubleValue(val);
        break;
      }
      case "aspectRatio": {
        const val = constraints[key];
        if (val !== undefined) settings[key] = getConstrainDoubleValue(val);
        break;
      }
      case "facingMode": {
        const val = constraints[key];
        if (val !== undefined)
          settings[key] =
            typeof val === "string" ? val : val.exact || val.ideal;

        break;
      }
      case "frameRate": {
        const val = constraints[key];
        if (val !== undefined) settings[key] = getConstrainDoubleValue(val);

        break;
      }
      case "height": {
        const val = constraints[key];
        if (val !== undefined) settings[key] = getConstrainULongValue(val);

        break;
      }
      case "width": {
        const val = constraints[key];
        if (val !== undefined) settings[key] = getConstrainULongValue(val);

        break;
      }
      case "resizeMode": {
        const val = constraints[key];
        if (val !== undefined)
          settings[key] =
            typeof val === "string" ? val : val.exact || val.ideal;
        break;
      }
      case "displaySurface": {
        const val = constraints[key];
        if (val !== undefined)
          settings[key] =
            typeof val === "string" ? val : val.exact || val.ideal;
        break;
      }
      case "logicalSurface": {
        const val = constraints[key];
        if (val !== undefined) settings[key] = getConstrainBooleanValue(val);
        break;
      }
      case "suppressLocalAudioPlayback": {
        const val = constraints[key];
        if (val !== undefined) settings[key] = getConstrainBooleanValue(val);
        break;
      }
      default:
        break;
    }
  });

  return settings;
};
