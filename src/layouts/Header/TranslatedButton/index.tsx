import React, { useState } from 'react';
import { Tooltip } from 'antd';
import storage from '@/utils/storage';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Wrap = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  .inner {
    width: 16px;
    height: 16px;
    position: relative;
  
    span {
      position: absolute;
      font-size: 16px;
      left: 5%;
      line-height: 1;
      border: 1px solid rgba(0, 0, 0, 0.88);
      color: rgba(0, 0, 0, 0.88);
      transform: scale(0.5);
      left: 4px;
      top: 4px;
    }
    .select {
      left: 0;
      top: 0;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.88);
      color: #ffffff;
      transform: scale(0.7);
      transform-origin: 0 0;
    }
  }
`;

const TranslatedButton: React.FC = () => {

  const [current, setCurrent] = useState(storage.getLocale());
  const { i18n } = useTranslation();

  const changeLocale = () => {
    const locale = current === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(locale);
    setCurrent(locale);
    storage.setLocale(locale);
  };

  return (
    <Tooltip title={current === 'zh' ? '中文 / English' : 'English / 中文'}>
      <Wrap onClick={changeLocale}>
        <div className="inner">
          <span className={current === 'zh' ? 'select' : ''}>中</span>
          <span className={current === 'en' ?'select' : ''}>En</span>
        </div>
      </Wrap>
    </Tooltip>
  );
};

export default TranslatedButton;
