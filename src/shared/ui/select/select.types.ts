export type SelectProps = {
  label?: string;
  placeholder?: string;
  showSearch?: boolean;
  title?: string;
  disabled?: boolean;
  options: { value: any; label: string; prefix?: React.ReactNode }[];
  onChange?(value: any): void;
  onClear?(): void;
  onNullish?(): void;
  value?: any;
  loading?: boolean;
  error?: string;
  required?: boolean;
  listEmptyTitle?: string;
  nullValue?: any;
};

export type SelectRef = {};
