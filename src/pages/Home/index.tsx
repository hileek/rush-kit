import React, { useEffect } from 'react';
import DynamicForm from '@/components/DynamicForm';

const Home: React.FC = () => {
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
  ];

  return (
    <div>
      <h1>Dynamic Form Example</h1>
      <DynamicForm  fields={formConfig} onSubmit={handleSubmit} />
      <div>
        <div id='a'></div>
      </div>
    </div>
  );
};

export default Home;
