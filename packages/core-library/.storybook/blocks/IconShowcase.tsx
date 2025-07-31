import React from 'react';
import { h } from '@stencil/core';
import docs from '../../docs/docs.json';

export function IconShowcase() {
  const { props } = docs.components.find(({ tag }) => tag === 'ui-icon') || {};
  const { values } = props?.find(({ name }) => name === 'name') || {};

  return (
    <>
      <h1>Icon Showcase</h1>
      <hr />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: 24,
          padding: 24,
          color: 'gray',
          borderRadius: 4,
          boxShadow: 'rgba(0, 0, 0, 0.10) 0 1px 3px 0',
          border: '1px solid hsla(203, 50%, 30%, 0.15)',
        }}
      >
        {values.map(({ value }: any) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 8,
            }}
          >
            {/* @ts-expect-error Web Component */}
            <ui-icon name={value} />
            <h5 style={{ margin: 0 }}>{value}</h5>
          </div>
        ))}
      </div>
    </>
  );
}
