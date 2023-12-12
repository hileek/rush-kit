import React, { lazy, Suspense, createElement, ComponentType } from 'react';

type FormType =
  | 'text'
  | 'password'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'datePicker'
  | 'inputNumber'
  | 'treeSelect'
  | 'cascader'
  | 'switch'
  | 'upload'
  | 'slider'
  | 'colorPicker';

type ComponentsType = Record<FormType, React.LazyExoticComponent<ComponentType<any>>>;

const Components: ComponentsType = {
  text: lazy(() => import('antd/es/input')),
  password: lazy(() => import('antd/es/input').then(module => ({ default: module.Password } as any))),
  select: lazy(() => import('antd/es/select')),
  checkbox: lazy(() => import('antd/es/checkbox')),
  radio: lazy(() => import('antd/es/radio')),
  datePicker: lazy(() => import('antd/es/date-picker')),
  inputNumber: lazy(() => import('antd/es/input-number')),
  treeSelect: lazy(() => import('antd/es/tree-select')),
  cascader: lazy(() => import('antd/es/cascader')),
  switch: lazy(() => import('antd/es/switch')),
  upload: lazy(() => import('antd/es/upload')),
  slider: lazy(() => import('antd/es/slider')),
  colorPicker: lazy(() => import('antd/es/color-picker')),
};

const SuspenseComponents: ComponentsType = Object.fromEntries(
  Object.entries(Components).map(([key, value]) => [
    key,
    (props) => (
      <Suspense fallback={null}>
        {createElement(value, props)}
      </Suspense>
    ),
  ])
);

export default SuspenseComponents;
