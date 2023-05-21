<h1 align="center">Basic Comps</h1>
<h4 align="center">A React component library for easy and fast markup</h4>

## Installation

```shell
$ yarn add basic-comps
# or
$ npm install basic-comps
```

<br />

## Features

- By default, all components are `display:flex`. Therefore, all components follow the [flexbox layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox).

- `Size` type props(such as `width`, `height`, `marginTop`, `fontSize`, etc...) accept a number type. If a value in `px` is inputted, it will be internally converted to `rem` values. For example, if the input is `20`, it will be converted to `1.25rem`.
  In the future, I plan to make it configurable both the input and output units.
- `Spacing` props(such as `padding`, `margin`) can accept several different types.
  - `string`: It is passed without any changes or modifications
  - `Size`: It applied to all sides (top, bottom, left, right)
  - `[Size, Size]`: top/bottom | left/right
  - `[Size, Size, Size]`: top | left/right | bottom
  - `[Size, Size, Size, Size]`: top | right | bottom | left

<br />

## Components

### Box

`Box` component is the most basic component. It can accept most CSS properties, excluding paragraph and grid-related ones, and can be used to create a "box" as the name suggests.

#### Default styles

```CSS
display: flex;
flex-direction: column;
align-items: stretch;
```

#### Props

- `relative`: `boolean` type. If `true`, it has `position: relative`.
- `center`: `boolean` type. If `true`, both `align-items` and `justify-content` are `center`.

#### Example

```JSX
<Box backgroundColor="gray" borderRadius={4} padding={[12, 16]}>
  hello world!
</Box>
```

---

### Absolute, Fixed, Sticky

These are box components that have the `position` CSS property and related props(`top`, `bottom`, `left`, `right`, `inset`, `zIndex`, etc...).

---

### Stacks

Both `VStack` and `HStack` are layout components used to arrange elements.

#### Default styles

- `VStack`

```CSS
flex-direction: column;
align-items: stretch;
```

- `HStack`

```CSS
flex-direction: row;
align-items: center;
```

#### Props

- `spacing`: `Size` type. It sets the spacing of items aligned on main axis.
- `crossSpacing`: `Size` type. It sets the spacing of items aligned on cross axis. It only works when the `flexWrap`([#](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)) prop is set.
  - reference: [The two axes of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#the_two_axes_of_flexbox)
- `reversed`: `boolean` type. It specifies the stack direction is reversed.

---

### Dividers

`VDivider` and `HDivider` are components that used to visually separate elements. It is the only component that does not inherit from the `Box` component.

---

### Grid, GridItem

`Grid` and `GridItem` are components used for [grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout).

---

### TextGroup, Text

`Text` is a component used to display text elements.

#### Props (`Text`)

- `lineThrough`: `boolean` type. If `true`, it has `text-decoration: line-through`.
- `underline`: `boolean` type. it has `text-decoration: underline`.
- `ellipsisLines`: `number` type. It contains some styles for `text-overflow: ellipsis`. The text is clipped to the number of lines specified by `ellipsisLines`, and ellipsis is applied.
