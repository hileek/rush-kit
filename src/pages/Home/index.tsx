import React from 'react';
import DynamicForm from '@/components/DynamicForm';

const Home: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
  };

  const formConfig: Field[] = [
    {
      type: 'select',
      label: 'City',
      name: 'city',
      options: [{ label: 'New York', value: 'NY' }, { label: 'New', value: 'N' }],
    },
    {
      type: 'text',
      label: 'Username',
      name: 'username',
      condition: (record) =>  (record?.city === 'N'),
      shouldUpdate: (prevValues, curValues) => prevValues.city !== curValues.city,
    },
  ];

  return (
    <div>
      <h1>Dynamic Form Example</h1>
      <DynamicForm fields={formConfig} onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
