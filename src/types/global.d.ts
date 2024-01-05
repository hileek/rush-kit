declare global {
  interface Option {
    label: string;
    value: string;
  }

  interface Item {
    key: string;
    label: string;
  }
  interface PageInfo {
    current: number;
    pageSize: number;
  }
}

export {};
