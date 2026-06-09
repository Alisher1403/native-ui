import CardExpiryInput from "./card-expiry/card-expiry";
import CardPanInput from "./card-pan/card-pan";
import FloatInput from "./float/float";
import NumberInput from "./number/number";
import PhoneInput from "./phone/phone";
import UzsTiyinInput from "./uzs-tiyin/uzs-tiyin";
function Input() {}

Input.Phone = PhoneInput;
Input.CardPan = CardPanInput;
Input.CardExpiry = CardExpiryInput;
Input.Number = NumberInput;
Input.Float = FloatInput;
Input.UzsTiyin = UzsTiyinInput;

export default Input;
