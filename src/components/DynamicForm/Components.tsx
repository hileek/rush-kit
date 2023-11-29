import React, { lazy, ReactNode, forwardRef, ForwardedRef, MutableRefObject } from 'react';

const componentMap: Record<
  string,
  React.LazyExoticComponent<React.ComponentType<any>>
> = {
  text: lazy(() => import('antd/es/input')),
  // password: lazy(() => import('antd/es/input').then(module => ({ default: module.Password }))),
  select: lazy(() => import('antd/es/select')),
  checkbox: lazy(() => import('antd/es/checkbox')),
  radio: lazy(() => import('antd/es/radio')),
  datePicker: lazy(() => import('antd/es/date-picker')),
  inputNumber: lazy(() => import('antd/es/input-number')),
  treeSelect: lazy(() => import('antd/es/tree-select')),
  cascader: lazy(() => import('antd/es/cascader')),
  switch: lazy(() => import('antd/es/switch')),
  upload: lazy(() => import('antd/es/upload')),
  slider: lazy(() => import('antd/es/slider')),
  colorPicker: lazy(() => import('antd/es/color-picker')),
};

function wrapAntdComponent(
  component: React.LazyExoticComponent<React.ComponentType<any>>
): React.ForwardRefExoticComponent<any> {
  const WrappedComponent = forwardRef(
    (
      { children, ...rest }: { children?: ReactNode; [key: string]: any },
      ref: ForwardedRef<MutableRefObject<any> | null>
    ) => {
      const Component = React.lazy(() => component);
      return (
        <React.Suspense fallback={null}>
          <Component {...rest} ref={ref} />
        </React.Suspense>
      );
    }
  );

  WrappedComponent.displayName = 'AntdLazyLoadComponent';

  return WrappedComponent;
}

const lazyLoadComponentMap: Record<string, React.ForwardRefExoticComponent<any>> = {};
Object.keys(componentMap).forEach((key) => {
  lazyLoadComponentMap[key] = wrapAntdComponent(componentMap[key]);
});

export default componentMap;
