import React from 'react';
import { Col, Form, FormProps, Row, RowProps } from 'antd';
import Components from './Components';
interface DynamicFormProps extends FormProps {
  fields: Field[];
  rowProps?: RowProps;
  onSubmit: (values: Record<string, string>) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onFinish, rowProps = {} }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} onFinish={onFinish}>
      <Row { ...rowProps }>
        {fields.map((field) => {
          const { name, label, type, condition, shouldUpdate, rules = [], componentProps = {}, colProps = { span: 24 } } = field;
          const Component = Components[type];

          if (condition) {
            return ( 
              <Form.Item
                noStyle
                key={name}
                shouldUpdate={shouldUpdate || true}
              >
                {({ getFieldsValue }) => 
                  condition(getFieldsValue()) ? (
                    <Col { ...colProps }>
                      <Form.Item name={name} label={label} rules={rules}>
                        <Component { ...componentProps } />
                      </Form.Item>
                    </Col>
                  ) : null}
              </Form.Item>
            );
          }
          return (
            <Col { ...colProps } key={name}>
              <Form.Item name={name} label={label} rules={rules}>
                <Component { ...componentProps } />
              </Form.Item>
            </Col>
          );
        })}
      </Row>
    </Form>
  );
};

export default DynamicForm;
