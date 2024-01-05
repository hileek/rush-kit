import React, { useRef } from 'react';
import { FormInstance } from 'antd';
import DynamicForm from '@/components/DynamicForm';
import QueryTable from '@/components/QueryTable';

const Home: React.FC = () => {
console.log('Home component rendered');
  const formInstance = useRef<FormInstance<any>>(null);
  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
  };

  const formConfig: Field[] = [
    {
      type: 'Select',
      label: 'City',
      name: 'city',
      componentProps: {
        options: [{ label: 'New York', value: 'NY' }, { label: 'New', value: 'N' }],
      },
    },
    {
      type: 'Input',
      label: 'Username',
      name: 'username',
      condition: (record) =>  (record?.city === 'N'),
      componentProps: {
        placeholder: '输入999',
      },
      shouldUpdate: (prevValues, curValues) => {
        console.log(curValues, 'curValues', prevValues.city !== curValues.city);
        return prevValues.city !== curValues.city;
      },
    },
    {
      type: 'Radio',
      label: 'Gender',
      name: 'gender',
      condition: (record) =>  (record?.username === '999'),
      componentProps: {
        options: [{ label: '男', value: '1' }, { label: '女', value: '0' }],
      },
      shouldUpdate: (prevValues, curValues) => prevValues.username !== curValues.username,
    },
    {
      type: 'Slider',
      label: '动物',
      name: 'animal',
      condition: (record) =>  (record?.gender > 0),
      componentProps: {
        options: [{ label: '狗', value: '1' }, { label: '猫', value: '0' }],
      },
      shouldUpdate: (prevValues, curValues) => prevValues.gender !== curValues.gender,
    },
    {
      type: 'ColorPicker',
      label: '颜色',
      name: 'color',
      condition: (record) =>  (record?.animal > 40),
      shouldUpdate: (prevValues, curValues) => prevValues.animal !== curValues.animal,
    },
    {
      type: 'DatePicker',
      label: '时间',
      name: 'time',
      condition: (record) =>  (record?.animal > 40),
      shouldUpdate: (prevValues, curValues) => prevValues.animal !== curValues.animal,
    },
    {
      type: 'RangePicker',
      label: '时间区域',
      name: 'timeRange',
      condition: (record) =>  (record?.animal > 40),
      shouldUpdate: (prevValues, curValues) => prevValues.animal !== curValues.animal,
    },
    {
      type: 'Button',
      name: '',
      condition: (record) =>  (record?.animal > 40 && record?.gender > 0 && record?.username === '999' && record?.city === 'N'),
      componentProps: {
        type: 'primary',
        htmlType: 'submit',
        children: '提交',
      },
      colProps: {
        span: 22,
      },
    },
    {
      type: 'Button',
      name: 'a',
      condition: (record) =>  (record?.animal > 40 && record?.gender > 0 && record?.username === '999' && record?.city === 'N'),
      componentProps: {
        type: 'primary',
        children: '提交',
      },
      colProps: {
        span: 2,
      },
    },
  ];

  return (
    <div>
      <h1>Dynamic Form Example</h1>
      <DynamicForm ref={formInstance} fields={formConfig} onFinish={handleSubmit} />
      <QueryTable fields={formConfig} dataSource={[]} fetchData={function (params: any): Promise<any> {
        console.log(params);
        return params;
      } } />
      <div onClick={() => console.log(formInstance.current?.getFieldsValue())}>
        测试ref
      </div>
    </div>
  );
};

export default Home;
