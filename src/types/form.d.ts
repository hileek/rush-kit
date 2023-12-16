import type { FormRule, ColProps } from 'antd';
declare global {
  interface Option {
    label: string;
    value: string;
  }
  type FormType =
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
  interface Field {
    type: FormType;
    label: string;
    name: string;
    condition?: (values: any) => boolean;
    options?: Option[];
    shouldUpdate?: (prevValues: any, curValues: any) => boolean;
    rules?: FormRule[];
    componentProps?: Record<any, any>;
    colProps?: ColProps;
  }
}
export {};
