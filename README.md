# NativeUI Components

Import components from:

```tsx
import { Badge, Division, Flex, Icon, Input, Layout, Select } from "@src/shared/ui";
```

## Layout

Use `Layout` as the screen wrapper. It provides ready-to-use header, content, footer, and safe-area helpers.

```tsx
<Layout bg="system/page">
  <Layout.Header>
    <Layout.Header.Title>Profile</Layout.Header.Title>
  </Layout.Header>

  <Layout.Content scrollEnabled px={16} py={12}>
    <Layout.Header.Height />
    <Division bg="system/white" p={16} rounded={24}>
      {/* screen content */}
    </Division>
    <Layout.Insets.Bottom />
  </Layout.Content>

  <Layout.Footer sticky>
    {/* bottom actions */}
  </Layout.Footer>
</Layout>
```

## Icon

Use `Icon` to render any registered icon from `icon.config.ts`.

```tsx
<Icon name="search-line" size="xl" color="main/primary" />
```

Common props: `name`, `size`, `color`.

## Select

Use `Select` when the user should choose one value from a bottom sheet list.

```tsx
<Select
  label="Country"
  placeholder="Choose country"
  value={country}
  onChange={setCountry}
  showSearch
  options={[
    { value: "uz", label: "Uzbekistan" },
    { value: "us", label: "United States" },
  ]}
/>
```

Common props: `label`, `placeholder`, `value`, `options`, `onChange`, `showSearch`, `error`, `required`.

## Input

Use `Input` for text and masked values such as phone, card, or numeric input.

```tsx
<Input
  label="Phone number"
  type="phone"
  value={phone}
  onChange={setPhone}
  required
  error={phoneError}
/>
```

Supported `type` values include: `default`, `phone`, `number`, `float`, `uzs-tiyin`, `card-pan`, `card-expiry`, `year`, `passport-number`, `passport-series`.

## Flex

Use `Flex` for horizontal or vertical layouts with alignment and spacing helpers.

```tsx
<Flex align="center" justify="space-between" gap={12}>
  <Icon name="user-3-line" />
  <Division flex />
  <Badge.Solid color="main/success">Active</Badge.Solid>
</Flex>
```

Common props: `gap`, `gapX`, `gapY`, `align`, `justify`, `column`, `wrap`, `fullWidth`.

## Division

Use `Division` as the base block container for spacing, background, radius, and simple visibility control.

```tsx
<Division bg="system/white" p={16} rounded={20} mb={12}>
  {/* content */}
</Division>
```

Common props: `p`, `px`, `py`, `m`, `mb`, `mt`, `rounded`, `bg`, `bgAlpha`, `flex`, `hidden`.

## Badge

`Badge` has three variants:

```tsx
<Badge.Solid color="main/primary" icon="check-line">
  Verified
</Badge.Solid>

<Badge.Filled color="main/success">
  Paid
</Badge.Filled>

<Badge.Count count={8}>
  <Icon name="notification-line" />
</Badge.Count>
```

- `Badge.Solid`: filled badge with white text/icon.
- `Badge.Filled`: light background badge with colored text/icon.
- `Badge.Count`: counter badge shown on top of another element.
