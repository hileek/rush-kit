// import axios from 'axios';
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router';
// import { useTranslation } from 'react-i18next';
// import TranslatedText from '@/components/TranslatedText';
// import lazyLoadComponentMap from '@/components/DynamicForm/Components';

// const Home: React.FC = () => {
//   const navigate = useNavigate();
//   const { i18n, t } = useTranslation();

//   const changeLanguage = (lng: string) => {
//     i18n.changeLanguage(lng);
//   };

//   const getData = async () => {
//     // const res = await axios.post('http://localhost:3000/api/posts');
//     // console.log(res);
//   };
//   const WrappedSelect = lazyLoadComponentMap.select;
//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div className='font-40'>
//       <div>
//         <WrappedSelect />
//         <p onClick={() => navigate('/login')}>{t('a')}</p>
//         <TranslatedText>a</TranslatedText>
//         <TranslatedText values={{ name: 'John'}}>greeting</TranslatedText>
//         <button><TranslatedText>button</TranslatedText></button>
//       </div>
//       <div>
//         <button onClick={() => changeLanguage('en')}>English</button>
//         <button onClick={() => changeLanguage('zh')}>中文</button>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import DynamicForm from '@/components/DynamicForm';

const MyFormContainer: React.FC = () => {
  const handleSubmit = (values: any) => {
    // Handle form submission logic here
    console.log('Form values:', values);
  };
  const condition = (record) => {
    return record.username === '123';
  };
  const formConfig = [
    { type: 'text', label: 'Username', name: 'username' },
    { type: 'select', label: 'City', name: 'city', options: [{ label: 'New York', value: 'NY' } ], condition },
  ];

  return (
    <div>
      <h1>Dynamic Form Example</h1>
      <DynamicForm formConfig={formConfig} onSubmit={handleSubmit} />
    </div>
  );
};

export default MyFormContainer;
