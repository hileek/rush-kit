declare global {
  enum Gender {
    Female = '0',
    Male = '1',
  }

  interface Role {
    createBy: string,
    createTime: Date,
    updateTime: Date,
    name: string,
    key: string;
  }
}

export {};
