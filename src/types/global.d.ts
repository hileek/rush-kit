import React, { ReactNode } from 'react';

declare global {
  interface Option {
    label: string;
    value: ReactNode;
  }

  interface Item {
    key: string;
    label: ReactNode;
  }
  interface PageInfo {
    current: number;
    pageSize: number;
  }
  interface TreeNode {
    [key: string]: any;
    children?: TreeNode[];
  }
}

export {};
