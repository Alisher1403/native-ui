export const INPUT_VALID_LENGTH = {
  PHONE: 13,
  CARD_PAN: 16,
  CARD_EXPIRY: 5,
  YEAR: 4,
  PASSPORT_NUMBER: 7,
  PASSPORT_SERIES: 2,
} as const;

export const INPUT_PREFIX = {
  PHONE: "+998",
} as const;
