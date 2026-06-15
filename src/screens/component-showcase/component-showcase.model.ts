import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "./component-showcase.types";

export function useModel() {
  const form = useForm({
    mode: "onSubmit",
    resolver: zodResolver(schema),
    defaultValues: {
      date: null,
      cardPan: "",
      phone: "",
      float: 0,
      number: 0,
      uzsTiyin: 0,
      cardExpiry: "",
      otp: "",
    },
  });

  function handleSubmit() {
    form.trigger();
    console.log(form.getValues());
  }

  return {
    form,
    handleSubmit,
  };
}
