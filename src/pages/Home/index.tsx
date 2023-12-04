import React, { useEffect } from 'react';
import DynamicForm from '@/components/DynamicForm';
import domToPDF from '@/utils/domToPDF';

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
  useEffect(() => {
    domToPDF(document.getElementsByClassName('ant-menu')[0]);
  }, []);

  return (
    <div>
      <h1>Dynamic Form Example</h1>
      <DynamicForm fields={formConfig} onSubmit={handleSubmit} />
      <div>
        <div id='a'></div>
      </div>
    </div>
  );
};

export default Home;
