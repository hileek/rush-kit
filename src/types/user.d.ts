declare global {
  enum Gender {
    Female = '0',
    Male = '1',
  }

  interface UserInfo {
    username: string;
    nickname: string;
    email: string;
    phone: string;
    avatar: string;
    address: string;
    dept: string;
    createTime: Date;
    lastLoginTime: Date;
    gender: Gender;
    permissions: string[];
    roles: string[];
  }
}

export {};
