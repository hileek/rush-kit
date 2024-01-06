import { ScreenType } from '@/types/app';

const getScreenType = (): ScreenType => {
  const width = window.innerWidth;
  if (width <= 768) return 'small';
  if (width > 768 && width < 1024) return'middle';
  return 'large';
};

export default getScreenType;
