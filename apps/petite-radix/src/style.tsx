import React from 'react';
import { css, keyframes } from '@stitches/core';

const Scrollable = (props: any) => (
  <div
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200vh' }}
    {...props}
  />
);

const CustomArrow = (props: any) => (
  <div
    {...props}
    style={{
      ...props.style,
      width: 20,
      height: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      backgroundColor: 'tomato',
    }}
  />
);

const RECOMMENDED_CSS__POPPER__CONTENT = {
  transformOrigin: 'var(--radix-popper-transform-origin)',
};

const contentClass = css({
  ...RECOMMENDED_CSS__POPPER__CONTENT,
  backgroundColor: '$gray100',
  padding: 10,
  borderRadius: 10,

  variants: {
    size: {
      small: { width: 100, height: 50 },
      large: { width: 300, height: 150 },
    },
  },
  defaultVariants: {
    size: 'large',
  },
});
const anchorClass = css({
    variants: {
        backgroundColor: {
          hotpink: { backgroundColor: 'hotpink' },
          blue: { backgroundColor: 'blue' },
          orange: { backgroundColor: 'orange' },
        },
        size: {
          small: { width: 50, height: 50 },
          large: { width: 100, height: 100 },
        },
      },
      defaultVariants: {
        size: 'large',
    },
});

const arrowClass = css({
  fill: '$gray100',
});

const rotateIn = keyframes({
  '0%': { transform: 'scale(0) rotateZ(calc(var(--direction, 0) * 45deg))' },
  '100%': { transform: 'scale(1)' },
});

const animatedContentClass = css(contentClass, {
  '&[data-side="top"]': { '--direction': '1' },
  '&[data-side="bottom"]': { '--direction': '-1' },
  animation: `${rotateIn} 0.6s cubic-bezier(0.16, 1, 0.3, 1)`,
});

export {
  Scrollable,
  CustomArrow,
  RECOMMENDED_CSS__POPPER__CONTENT,
  contentClass,
  anchorClass,
  arrowClass,
  rotateIn,
  animatedContentClass,
};
