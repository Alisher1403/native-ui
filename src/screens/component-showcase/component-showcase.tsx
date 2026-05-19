import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Division,
  INPUT_VALID_LENGTH,
  Input,
  Layout,
  Select,
  Typography,
  DatePicker,
} from '@src/shared/ui';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  date: z
    .string()
    .nullable()
    .refine(date => date !== null, { message: 'Date is required' }),
  cardPan: z.string().min(INPUT_VALID_LENGTH.CARD_PAN, 'Card PAN is required'),
  phone: z.string().min(INPUT_VALID_LENGTH.PHONE, 'Phone number is required'),
  float: z.number().min(1, 'Float number is required'),
  select: z.string().min(1, 'Select is required'),
});

export default function ComponentShowcase() {
  const form = useForm({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
    defaultValues: {
      date: null,
      cardPan: '',
      phone: '',
      float: 0,
    },
  });

  function handleSubmit() {
    form.trigger();
    console.log(form.getValues());
  }

  return (
    <Layout bg="system/page">
      <Layout.Header>
        <Layout.Header.Title>Component showcase</Layout.Header.Title>
      </Layout.Header>

      <Layout.Content scrollEnabled bg="system/page">
        <Layout.Header.Height />

        <Division bg="system/white" p={16} rounded={24} mb={8}>
          <Typography name="title2/semibold" color="main/label" mb={8}>
            Form
          </Typography>
          <Controller
            control={form.control}
            name="date"
            render={({ field, fieldState }) => (
              <DatePicker
                value={field.value}
                label="Date of birth"
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />

          <Division mb={8} />
          <Controller
            control={form.control}
            name="cardPan"
            render={({ field, fieldState }) => (
              <Input
                value={field.value}
                type="card-pan"
                label="Card PAN"
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />

          <Division mb={8} />
          <Controller
            control={form.control}
            name="phone"
            render={({ field, fieldState }) => (
              <Input
                value={field.value}
                type="phone"
                label="Phone number"
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />

          <Division mb={8} />
          <Controller
            control={form.control}
            name="float"
            render={({ field, fieldState }) => (
              <Input
                value={field.value.toString()}
                type="float"
                label="Float number"
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />

          <Division mb={8} />
          <Controller
            control={form.control}
            name="float"
            render={({ field, fieldState }) => (
              <Select
                value={field.value}
                label="Select"
                options={[
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' },
                  { value: '3', label: 'Option 3' },
                ]}
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            )}
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
