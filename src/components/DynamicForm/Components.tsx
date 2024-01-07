import React, { lazy, Suspense, createElement, ComponentType, ReactElement } from 'react';

export type FormType =
| 'Input'
| 'Group'
| 'TextArea'
| 'Search'
| 'Password'
| 'Select'
| 'Checkbox'
| 'Radio'
| 'DatePicker'
| 'InputNumber'
| 'TreeSelect'
| 'Switch'
| 'Upload'
| 'Cascader'
| 'RangePicker'
| 'Slider'
| 'Button'
| 'ColorPicker';

type ComponentsType = Record<FormType, React.LazyExoticComponent<ComponentType<any>>>;

type ComponentGenerator = (props: any) => ReactElement;

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
  RangePicker: lazy(() => import('antd/es/date-picker').then((module) => ({ default: module.default.RangePicker }))),
  InputNumber: lazy(() => import('antd/es/input-number')),
  TreeSelect: lazy(() => import('antd/es/tree-select')),
  Cascader: lazy(() => import('antd/es/cascader')),
  Switch: lazy(() => import('antd/es/switch')),
  Upload: lazy(() => import('antd/es/upload')),
  Slider: lazy(() => import('antd/es/slider')),
  ColorPicker: lazy(() => import('antd/es/color-picker')),
  Button: lazy(() => import('antd/es/button')),
};

const Components: Record<FormType, ComponentGenerator> = Object.fromEntries(
  Object.entries(LazyComponents).map(([key, value]) => [
    key,
    (props) => (
      <Suspense fallback={null}>
        {createElement(value, props)}
      </Suspense>
    ),
  ])
) as Record<FormType, ComponentGenerator>;

export default Components;
