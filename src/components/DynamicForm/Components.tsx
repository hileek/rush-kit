import React, { lazy } from 'react';

const Components: Record<
  string,
  React.LazyExoticComponent<React.ComponentType<any>>
> = {
  text: lazy(() => import('antd/es/input')),
  // password: lazy(() => import('antd/es/input').then(module => ({ default: module.Password }))),
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

export default Components;
