import { InputConfig } from "./input.types";
import * as Mask from "./input.mask";

export const InputMaskConfig: InputConfig = {
  ["default"]: {
    keyboardType: "default",
    mask: Mask.MaskDefaultValue,
    unMask: Mask.UnMaskDefaultValue,
  },

  ["phone"]: {
    keyboardType: "phone-pad",
    maxLength: 14,
    prefixText: "+998",
    mask: Mask.MaskPhoneValue,
    unMask: Mask.UnMaskPhoneValue,
  },

  ["number"]: {
    keyboardType: "numeric",
    maxLength: 21,
    mask: Mask.MaskNumberValue,
    unMask: Mask.UnMaskNumberValue,
  },

  ["float"]: {
    keyboardType: "decimal-pad",
    maxLength: 21,
    mask: Mask.MaskFloatValue,
    unMask: Mask.UnMaskFloatValue,
  },

  ["uzs-tiyin"]: {
    keyboardType: "decimal-pad",
    maxLength: 21,
    mask: Mask.MaskUzsTiyinValue,
    unMask: Mask.UnMaskUzsTiyinValue,
  },

  ["card-pan"]: {
    keyboardType: "numeric",
    placeholder: "0000 0000 0000 0000",
    maxLength: 19,
    mask: Mask.MaskCardPanValue,
    unMask: Mask.UnMaskCardPanValue,
  },

  ["card-expiry"]: {
    keyboardType: "numeric",
    maxLength: 5,
    mask: Mask.MaskCardExpiryValue,
    unMask: Mask.UnMaskCardExpiryValue,
  },

  ["year"]: {
    keyboardType: "numeric",
    maxLength: 4,
    mask: Mask.MaskYearValue,
    unMask: Mask.UnMaskYearValue,
  },

  ["passport-number"]: {
    keyboardType: "numeric",
    maxLength: 7,
    mask: Mask.MaskPassportNumberValue,
    unMask: Mask.UnMaskPassportNumberValue,
  },

  ["passport-series"]: {
    keyboardType: "default",
    maxLength: 2,
    mask: Mask.MaskPassportSeriesValue,
    unMask: Mask.UnMaskPassportSeriesValue,
  },
};
