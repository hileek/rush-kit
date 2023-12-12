import React, { lazy, Suspense, createElement, ComponentType } from 'react';



type ComponentsType = Record<FormType, React.LazyExoticComponent<ComponentType<any>>>;

const LazyComponents: ComponentsType = {
  Input: lazy(() => import('antd/es/input')),
  Group: lazy(() => import('antd/es/input/Group')),
  TextArea: lazy(() => import('antd/es/input/TextArea')),
  Search: lazy(() => import('antd/es/input/Search')),
  Password: lazy(() => import('antd/es/input/Password')),
  Select: lazy(() => import('antd/es/select')),
  Checkbox: lazy(() => import('antd/es/checkbox')),
  Radio: lazy(() => import('antd/es/radio/group')),
  DatePicker: lazy(() => import('antd/es/date-picker')),
  InputNumber: lazy(() => import('antd/es/input-number')),
  TreeSelect: lazy(() => import('antd/es/tree-select')),
  Cascader: lazy(() => import('antd/es/cascader')),
  Switch: lazy(() => import('antd/es/switch')),
  Upload: lazy(() => import('antd/es/upload')),
  Slider: lazy(() => import('antd/es/slider')),
  ColorPicker: lazy(() => import('antd/es/color-picker')),
};

const Components: ComponentsType = Object.fromEntries(
  Object.entries(LazyComponents).map(([key, value]) => [
    key,
    (props) => (
      <Suspense fallback={null}>
        {createElement(value, props)}
      </Suspense>
    ),
  ])
);

export default Components;
