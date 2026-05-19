export type DatePickerProps = {
  label?: string;
  placeholder?: string;
  value?: string | null | undefined;
  onChange?(value: string | null): void;
  disabled?: boolean;
  error?: string;
  required?: boolean;
  min?: Date;
  max?: Date;
};
