import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import TranslatedText from '@/components/TranslatedText';

const Home = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const getData = async () => {
    // const res = await axios.post('http://localhost:3000/api/posts');
    // console.log(res);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='font-40'>
      <div>
        <p onClick={() => navigate('/login')}>{t('a')}</p>
        <TranslatedText>a</TranslatedText>
        <TranslatedText values={{ name: 'John'}}>greeting</TranslatedText>

        <button><TranslatedText>button</TranslatedText></button>
      </div>
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('zh')}>中文</button>
      </div>
    </div>
  );
};

export default Home;
