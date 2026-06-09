# NativeUI Components

Import components from:

```tsx
import { Badge, Button, Division, Flex, Icon, Input, Layout, Select } from "@src/shared/ui";
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
<Icon name="search-line" size={24} color="main/primary" />
```

Common props: `name`, `size`, `color`. `size` is numeric.

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

Use compound `Input` components for masked form fields.

```tsx
<Input.Phone label="Phone number" value={phone} onChange={setPhone} />
<Input.CardPan label="Card number" value={cardPan} onChange={setCardPan} />
<Input.CardExpiry label="Expiry" value={expiry} onChange={setExpiry} />
<Input.Number label="Weight" value={weight} suffix="kg" onChange={setWeight} />
<Input.Float label="Amount" value={amount} suffix="so'm" onChange={setAmount} />
<Input.UzsTiyin label="Price" value={priceTiyin} suffix="so'm" onChange={setPriceTiyin} />
```

Common props: `label`, `value`, `onChange`, `placeholder`, `required`, `error`, `disabled`, `style`, `ref`.

Value behavior: `Phone`, `CardPan`, and `CardExpiry` return strings. `Number` returns number. `Float` returns number while preserving typed decimal text. `UzsTiyin` displays UZS and returns tiyin.

## Button

Use `Button` for primary actions, optional icons, and loading/disabled states.

```tsx
<Button type="primary" size="medium" icon="send-fill" onPress={handleSubmit}>
  Continue
</Button>
```

Common props: `type`, `size`, `icon`, `loading`, `disabled`, `onPress`, `fullWidth`.

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
