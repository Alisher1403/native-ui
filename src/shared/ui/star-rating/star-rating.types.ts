export type StarRatingProps = {
  label?: string;
  value: number;
  onChange: (value: number) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
};
