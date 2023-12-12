import type { FormRule } from 'antd';
declare global {
  interface Option {
    label: string;
    value: string;
  }

  type FormType = 'text' | 'select' | 'checkbox' | 'radio' | 'datePicker' | 'inputNumber' | 'treeSelect' | 'cascader' | 'upload' | 'switch' | 'slider' | 'colorPicker'
  interface Field {
    type: FormType;
    label: string;
    name: string;
    condition?: (values: any) => boolean;
    options?: Option[];
    shouldUpdate?: (prevValues: any, curValues: any) => boolean;
    rules?: FormRule[];
    componentProps?: Record<any, any>;
  }
}
export {};
