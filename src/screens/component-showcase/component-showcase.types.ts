import { INPUT_VALID_LENGTH } from "@src/shared/ui";
import z from "zod";

export const schema = z.object({
  date: z
    .string()
    .nullable()
    .refine(date => date !== null, { message: "Date is required" }),
  cardPan: z.string().min(INPUT_VALID_LENGTH.CARD_PAN, "Card PAN is required"),
  phone: z.string().min(INPUT_VALID_LENGTH.PHONE, "Phone number is required"),
  float: z.number().min(1, "Float number is required"),
  number: z.number().min(1, "Number is required"),
  uzsTiyin: z.number().min(1, "UZS tiyin is required"),
  cardExpiry: z.string().min(4, "Card expiry is required"),
  select: z.string().min(1, "Select is required"),
  otp: z.string().min(6, "OTP is required"),
});
