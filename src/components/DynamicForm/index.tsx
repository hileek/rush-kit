import React, { forwardRef, useImperativeHandle } from 'react';
import { Col, ColProps, Form, FormInstance, FormProps, FormRule, Row, RowProps } from 'antd';
import TranslatedText from '../TranslatedText';
import Components, { FormType } from './Components';

export interface Field {
  type: FormType;
  label?: string;
  name: string;
  condition?: (values: any) => boolean;
  options?: Option[];
  shouldUpdate?: (prevValues: any, curValues: any) => boolean;
  rules?: FormRule[];
  componentProps?: Record<any, any>;
  colProps?: ColProps;
}

export type { FormType };

interface DynamicFormProps extends FormProps {
  fields: Field[];
  rowProps?: RowProps;
  onFinish?: (values: Record<string, string>) => void;
}

const DynamicForm = forwardRef<FormInstance, DynamicFormProps>(({ fields, onFinish = () => undefined, rowProps = {} }, ref) => {
  const [form] = Form.useForm();

  useImperativeHandle(
    ref,
    () => ({
      ...form,
    }),
    [form]
  );

  return (
    <Form form={form} onFinish={onFinish}>
      <Row {...rowProps}>
        {fields.map(({ name, label, type, condition, shouldUpdate, rules = [], componentProps = {}, colProps = { span: 24 } }) => {
          const Component = Components[type];

          return (
            condition ? (
              <Form.Item
                noStyle
                key={name}
                shouldUpdate={shouldUpdate || true}
              >
                {({ getFieldsValue }) =>
                  condition(getFieldsValue()) && (
                    <Col {...colProps}>
                      <Form.Item name={name} label={label ? <TranslatedText>{label}</TranslatedText> : null} rules={rules}>
                        <Component {...componentProps} />
                      </Form.Item>
                    </Col>
                  )}
              </Form.Item>
            ) : (
              <Col {...colProps} key={name}>
                <Form.Item name={name} label={label ? <TranslatedText>{label}</TranslatedText> : null} rules={rules}>
                  <Component {...componentProps} />
                </Form.Item>
              </Col>
            )
          );
        })}
      </Row>
    </Form>
  );
});

DynamicForm.displayName = 'DynamicForm';

export default DynamicForm;
