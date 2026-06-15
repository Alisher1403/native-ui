import { Button, Division, Input, Layout, Typography, OtpInput } from "@src/shared/ui";
import { Controller } from "react-hook-form";
import { useModel } from "./component-showcase.model";

export default function ComponentShowcase() {
  const { form, handleSubmit } = useModel();

  return (
    <Layout bg="system/page">
      <Layout.Header>
        <Layout.Header.Title>Component showcase</Layout.Header.Title>
      </Layout.Header>

      <Layout.Content scrollEnabled bg="system/page">
        <Layout.Header.Height />

        <Division bg="system/white" p={16} rounded={24} mb={8}>
          <Typography name="title2/semibold" color="main/label">
            Form
          </Typography>

          <Division mb={12} />
          <Controller
            control={form.control}
            name="phone"
            render={({ field, fieldState }) => (
              <Input.Phone
                required
                label="Phone Number"
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />

          <Division mb={12} />
          <Controller
            control={form.control}
            name="cardPan"
            render={({ field, fieldState }) => (
              <Input.CardPan
                required
                label="Card Number"
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />

          <Division mb={12} />
          <Controller
            control={form.control}
            name="number"
            render={({ field, fieldState }) => (
              <Input.Number
                required
                label="Number"
                value={field.value}
                suffix="kg"
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />

          <Division mb={12} />
          <Controller
            control={form.control}
            name="float"
            render={({ field, fieldState }) => (
              <Input.Float
                required
                label="Floating number"
                value={field.value}
                suffix="tonna"
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />

          <Division mb={12} />
          <Controller
            control={form.control}
            name="uzsTiyin"
            render={({ field, fieldState }) => (
              <Input.UzsTiyin
                required
                label="UZS tiyin"
                value={field.value}
                suffix="so'm"
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />

          <Division mb={12} />
          <Controller
            control={form.control}
            name="cardExpiry"
            render={({ field, fieldState }) => (
              <Input.CardExpiry
                required
                label="Card Expiry"
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />

          <Division mb={24} />
          <Controller
            control={form.control}
            name="otp"
            render={({ field }) => <OtpInput value={field.value} onChange={field.onChange} length={6} />}
          />
        </Division>

        <Layout.Insets.Bottom />
      </Layout.Content>

      <Layout.Footer sticky bg="transparent">
        <Button type="primary" onPress={handleSubmit}>
          Test
        </Button>
      </Layout.Footer>
    </Layout>
  );
}
