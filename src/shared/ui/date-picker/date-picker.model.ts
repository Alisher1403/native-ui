import { useMemo, useState } from "react";
import { DatePickerProps } from "./date-picker.types";
import { formatDate } from "date-fns";
import { useTranslation } from "react-i18next";
import { DATE_PICKER_FNS_LOCALES } from "./date-picker.config";

export function useModel(props: DatePickerProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { i18n } = useTranslation();
  const locale = i18n.language as keyof typeof DATE_PICKER_FNS_LOCALES;

  const formattedValue = useMemo(() => {
    return props.value
      ? formatDate(new Date(String(props.value)), "dd MMMM yyyy", { locale: DATE_PICKER_FNS_LOCALES[locale] })
      : props.placeholder || "--/--/----";
  }, [props.value, props.placeholder, locale]);

  function handleConfirm(date: Date) {
    setModalOpen(false);
    props.onChange?.(date.toJSON());
  }

  function handleClear() {
    setModalOpen(false);
    props.onChange?.(null);
  }

  function handleCancel() {
    setModalOpen(false);
  }

  return {
    locale,
    modalOpen,
    setModalOpen,
    handleConfirm,
    handleClear,
    handleCancel,
    formattedValue,
  };
}
