import { useState, useEffect } from 'react';
import getScreenType from '@/utils/getScreenType';
import type { ScreenType } from '@/types/app';

function useScreenType(): ScreenType {
  const [screenType, setScreenType] = useState<ScreenType>(getScreenType());

  useEffect(() => {
    const handleResize = () => {
      requestAnimationFrame(() => {
        setScreenType(getScreenType());
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return screenType;
}

export default useScreenType;
