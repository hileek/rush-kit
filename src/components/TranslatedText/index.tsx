import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  children: ReactNode;
  values?: Record<string, string>;
}

const TranslatedText: React.FC<Props> = ({ children, values }) => {
  const { t } = useTranslation();

  return <>{t(children, values)}</>;
};

export default TranslatedText;
