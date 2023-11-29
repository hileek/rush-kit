import React, { useState } from 'react';
import { Form, Button } from 'antd';
import componentMap from './Components';

interface ComponentMap {
  text: React.LazyExoticComponent<React.ComponentType<any>>;
  select: React.LazyExoticComponent<React.ComponentType<any>>;
  checkbox: React.LazyExoticComponent<React.ComponentType<any>>;
}

type RecordType = Record<string, any>;

interface FormItem {
  type: keyof ComponentMap;
  label: string;
  name: string;
  condition?: (records: RecordType) => boolean;
  [key: string]: any;
}

interface DynamicFormProps {
  formConfig: FormItem[];
  onSubmit: (values: any) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ formConfig, onSubmit }) => {
  const [form] = Form.useForm();

  const [forceUpdateFlag, setForceUpdateFlag] = useState(false);

  const shouldRenderComponent = (condition: ((records: RecordType) => boolean) | undefined, records: RecordType) => {
    if (typeof condition === 'function') {
      return condition(records);
    }
    return true;
  };

  const renderFormItem = (item: FormItem, index: number, records: RecordType) => {
    const { type, label, name, condition, ...restProps } = item;

    if (!shouldRenderComponent(condition, records)) {
      return null;
    }

    const Component = componentMap[type];
    console.log(item)

    return (
      <Form.Item key={name} label={label} name={name} {...restProps}>
        <React.Suspense fallback={null}>
          <Component />
        </React.Suspense>
      </Form.Item>
    );
  };

  const renderFormItems = () => {
    const records: FormItem[] = [];
    return formConfig.map((item, index) => {
      const formItem = renderFormItem(item, index, form.getFieldsValue(true));
      if (formItem) {
        records.push(item);
      }
      return formItem;
    });
  };

  const handleInputChange = () => {
    setForceUpdateFlag(!forceUpdateFlag);
  };


  return (
    <Form form={form} onFinish={onSubmit} onValuesChange={handleInputChange} initialValues={{username: '1'}}>
      {renderFormItems()}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DynamicForm;
