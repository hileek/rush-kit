import React, { createElement, Fragment } from 'react';
import { Form, FormProps, Input } from 'antd';
import Components from './Components';
interface DynamicFormProps extends FormProps {
  fields: Field[];
  onSubmit: (values: Record<string, string>) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onFinish }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} onFinish={onFinish}>
      {fields.map((field) => {
        const { name, label, rules, type, condition, shouldUpdate, componentProps } = field;
        const Component = Components[type];

        if (condition) {
          return ( 
            <Form.Item
              noStyle
              key={name}
              shouldUpdate={shouldUpdate || (() => false)}
            >
              {({ getFieldsValue }) => 
                condition(getFieldsValue()) ? (
                  <Form.Item  name={name} label={label} rules={rules || []}>
                    <Component { ...componentProps } />
                  </Form.Item>
                ) : null}
            </Form.Item>
          );
        }
        return (
          <Form.Item key={name} name={name} label={label} rules={rules || []}>
            <Component { ...componentProps } />
          </Form.Item>
        );
      })}
    </Form>
  );
};

export default DynamicForm;
