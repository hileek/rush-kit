declare global {
  interface Option {
    label: string;
    value: string;
  }
  interface Field {
    type: string;
    label: string;
    name: string;
    condition?: (values: any) => boolean;
    options?: Option[];
    shouldUpdate?: (prevValues: any, curValues: any) => boolean;
  }
}

export {};
