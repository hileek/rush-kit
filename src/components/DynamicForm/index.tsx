import React, { Fragment } from 'react';
import { Form } from 'antd';
import Components from './Components';

const renderFormItem = (field: Field, getFieldsValue: () => Record<string, string> | void) => {
  const { type, label, name,  condition, ...restProps } = field;
  const Component = Components[type];

  if (!condition || typeof condition !== 'function') {
    return (
      <Form.Item name={name} label={label} rules={[{ required: true }]}>
        <Component {...restProps} />
      </Form.Item>
    );
  }

  const isRender = condition(getFieldsValue());

  return (
    isRender && (
      <Form.Item name={name} label={label} rules={[{ required: true }]}>
        <Component  {...restProps} />
      </Form.Item>
    )
  );
};

interface DynamicFormProps {
  fields: Field[];
  onSubmit: (values: Record<string, string>) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} onFinish={onSubmit}>
      {fields.map((field) => (
        <Fragment key={field.name}>
          <Form.Item
            noStyle
            // shouldUpdate={field.shouldUpdate || (() => false)}
            shouldUpdate={() => true}
          >
            {({ getFieldsValue }) => renderFormItem(field, getFieldsValue)}
          </Form.Item>
        </Fragment>
      ))}
    </Form>
  );
};

export default DynamicForm;
