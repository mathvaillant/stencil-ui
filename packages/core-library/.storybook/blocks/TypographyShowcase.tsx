import React from 'react';
import { h } from '@stencil/core';
import docs from '../../docs/docs.json';

export const TypographyShowcase = () => {
  const { props } = docs.components.find(c => c.tag === 'ui-typography') || {};
  const { values } = props?.find(p => p.name === 'variant') || {};

  return (
    <>
      <h1>Typography Showcase</h1>
      <hr />
      {values.map(({ value }: any) => (
        <>
          {/* @ts-expect-error Web Component */}
          <ui-typography variant={value}>{value} Typography</ui-typography>
          <br />
        </>
      ))}
    </>
  );
};
